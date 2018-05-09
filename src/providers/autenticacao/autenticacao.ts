
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from '../../models/usuario.model';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class AutenticacaoProvider {

  private userRef = this.db.list<Usuario>('perfis-usuarios');
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
}
