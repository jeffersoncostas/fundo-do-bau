import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { Desafio } from "../../models/desafio.model";

@Injectable()
export class RecompensasProvider {
  private userId: string = this.afAuth.auth.currentUser.uid;
  private userDb: AngularFireObject<{}> = this.db.object(
    "perfis/" + this.userId
  );
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {}

  darPontos(desafio: Desafio) {
    let pontosAtuais;
    let pontoDesafio;
    return this.userDb
      .snapshotChanges()
      .map(data => {
        console.log(data.payload.val());
        pontoDesafio = desafio.pontos;
        pontosAtuais = data.payload.val().pontos;
        let soma = parseInt(pontoDesafio) + parseInt(pontosAtuais);
        let newPontos = { pontos: soma };
        return this.userDb.update(newPontos).then(() => {
          return pontosAtuais;
        });
      })
      .take(1);
  }

  darConquista(desafio: Desafio) {
    let listaConquistas = [];
    return this.userDb
      .snapshotChanges()
      .map(data => {
        if (data.payload.val().conquistas) {
          listaConquistas = data.payload.val().conquistas;
        }

        console.log(listaConquistas);
        listaConquistas.push(desafio.conquista);

        return this.userDb.update({ conquistas: listaConquistas }).then(() => {
          return listaConquistas;
        });
      })
      .take(1);
    //.push(desafio.conquista);
  }

  getConquista(desafio: Desafio) {
    return this.db
      .object("conquistas/" + desafio.conquista)
      .snapshotChanges()
      .map(data => {
        return data.payload.val();
      })
      .take(1);
  }
}
