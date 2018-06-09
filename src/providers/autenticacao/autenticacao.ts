import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from "../../models/usuario.model";
import { AngularFireDatabase } from "angularfire2/database";
import { Desafio } from "../../models/desafio.model";
import { Subscription } from "rxjs/Subscription";
@Injectable()
export class AutenticacaoProvider {
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {}

  async register(emailSenha, user: Usuario) {
    return await this.afAuth.auth
      .createUserWithEmailAndPassword(
        emailSenha.email,
        emailSenha.senhas.password
      )
      .then(() => this.criarPerfil(user));
  }

  async login(user) {
    return await this.afAuth.auth.signInWithEmailAndPassword(
      user.email,
      user.password
    );
  }

  async criarPerfil(user: Usuario) {
    let usuario = {
      username: user.username,
      pontos: user.pontos,
      adm: user.adm
    };
    this.afAuth.authState.subscribe(auth => {
      this.db.object(`perfis/${auth.uid}`).set(usuario);
    });
  }

  async logout() {
    return await this.afAuth.auth.signOut();
  }

  async estaLogado() {
    return await this.afAuth.auth.currentUser.uid;
  }

  getProfile() {
    let userId = this.afAuth.auth.currentUser.uid;
    let usuario;
    return this.db
      .object<Usuario>(`perfis/${userId}`)
      .snapshotChanges()
      .take(1)
      .map(data => (usuario = data.payload.val()));
  }

  async resetarSenha(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  async updateEmail(email: string) {
    let user = this.afAuth.auth.currentUser;

    return user.updateEmail(email).then(data => {
      return this.afAuth.auth.updateCurrentUser(user);
    }, error => error);
  }

  async updateNome(nome: string) {
    let userId = this.afAuth.auth.currentUser.uid;

    return this.db.object(`perfis/${userId}`).update({ nome: nome });
  }
  async updateUsername(userName: string) {
    let userId = this.afAuth.auth.currentUser.uid;

    return this.db.object(`perfis/${userId}`).update({ username: userName });
  }

  getUser() {
    return this.afAuth.authState;
  }
}
