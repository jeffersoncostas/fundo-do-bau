import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from "../../models/usuario.model";
import { AngularFireDatabase } from "angularfire2/database";
import { Conquista } from "../../models/conquista.model";
import { Desafio } from "../../models/desafio.model";
import "rxjs/add/operator/map";
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
    return await this.db.list(`conquistas/${id}`).snapshotChanges();
  }
  getAllConquistas() {
    return this.db
      .list("conquistas/")
      .snapshotChanges()
      .map(conquistas => {
        let listaConquistas$ = [];
        console.log(conquistas);
        conquistas.forEach(element => {
          console.log(element.payload.val());
          listaConquistas$.push(element.payload.val());
        });
        return listaConquistas$;
      });
  }

  async novoDesafio(desafio: Desafio) {
    return await this.db.list(`desafios/`).push(desafio);
  }
  getDesafio(id) {
    return this.db.object(`desafios/${id}`).snapshotChanges();
  }
}
