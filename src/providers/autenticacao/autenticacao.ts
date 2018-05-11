
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from '../../models/usuario.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Desafio } from '../../models/desafio.model';
@Injectable()
export class AutenticacaoProvider {


  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {

  }

  async register(emailSenha, user: Usuario) {
    return await this.afAuth.auth.createUserWithEmailAndPassword(emailSenha.email, emailSenha.senhas.password).then(() => this.criarPerfil(user))
  }

  async login(user) {
    return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  async criarPerfil(user: Usuario) {
    this.afAuth.authState.subscribe(auth => {
      this.db.object(`perfis/${auth.uid}`).set(user)
    })
  }

  async logout() {
    return await this.afAuth.auth.signOut()
  }

  async estaLogado() {
    return await this.afAuth.auth.currentUser.uid
  }

  getProfile(authId) {
    return this.db.object<Usuario>(`perfis/${authId}`)
  }

}
