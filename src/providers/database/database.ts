
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from '../../models/usuario.model';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    console.log('Hello DatabaseProvider Provider');
  }

  async getUserData() {
    return this.afAuth.authState.take(1).subscribe(auth => {
      this.db.object(`perfis/${auth.uid}`).valueChanges()
    })
  }
}
