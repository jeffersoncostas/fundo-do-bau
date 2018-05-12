import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from "../../models/usuario.model";
import { AngularFireDatabase } from "angularfire2/database";
import { Conquista } from "../../models/conquista.model";
import { Desafio } from "../../models/desafio.model";
@Injectable()
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    console.log("Hello DatabaseProvider Provider");
  }

  async novaConquista(conquista: Conquista) {
    return await this.db.list(`conquistas/`).push(conquista);
  }

  async getConquista(id) {
    return this.db.object(`conquistas/${id}`).snapshotChanges();
  }
  getAllConquistas() {
    return this.db.list("conquistas/").snapshotChanges();
  }

  async novoDesafio(desafio: Desafio) {
    return await this.db.list(`desafios/`).push(desafio);
  }
}
