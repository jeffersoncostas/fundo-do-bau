
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from '../../models/usuario.model';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class AutenticacaoProvider {

  private userRef = this.db.list<Usuario>('perfis-usuarios');
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {

  }

  async register(user: Usuario) {
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
    }
    catch (e) {
    }
  }

  async login(user) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);

    }
    catch (e) { }
  }
}
