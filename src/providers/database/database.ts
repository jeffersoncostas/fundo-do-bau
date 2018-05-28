import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from "../../models/usuario.model";
import { AngularFireDatabase } from "angularfire2/database";
import { Conquista } from "../../models/conquista.model";
import { Desafio } from "../../models/desafio.model";
import "rxjs/add/operator/map";
import { Subscription } from "rxjs/Subscription";
@Injectable()
export class DatabaseProvider {
  getAllConquistasUsuarioSubscription: Subscription;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {}

  async novaConquista(conquista: Conquista) {
    return await this.db.list(`conquistas/`).push(conquista);
  }

  async novoDesafio(desafio: Desafio) {
    return this.db
      .list(`desafios/`)
      .push(desafio)
      .then(desafio2 => {
        let desafioLocation = [desafio.latLong[0], desafio.latLong[1]];
        this.db.object("desafioLocation/" + desafio2.key).set(desafioLocation);
      });
  }
  getDesafio(id) {
    return this.db.object(`desafios/${id}`).snapshotChanges();
  }

  getAllDesafios() {
    let listaDesafios = [];
    return this.db
      .list(`desafios/`)
      .snapshotChanges()
      .map(data => {
        listaDesafios = [];
        data.forEach(element => {
          listaDesafios.push(element.payload.val());
        });
        return listaDesafios;
      });
  }

  getConquistaUsuario(idConquista) {
    return this.db
      .object(`conquistas/${idConquista}`)
      .snapshotChanges()
      .map(conquista => {
        return conquista.payload.val();
      });
  }

  async getAllConquistasUsuario(arrayId: string[]) {
    let getConqUserSubscription: Subscription;
    let conquistasUsuarioReal = [];

    arrayId.forEach(idConquista => {
      this.getAllConquistasUsuarioSubscription = this.getConquistaUsuario(
        idConquista
      ).subscribe(data => {
        conquistasUsuarioReal.push(data);
      });
    });
    return conquistasUsuarioReal;
  }

  unsubscribeGetAllConquistasUsuario() {
    this.getAllConquistasUsuarioSubscription.unsubscribe();
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

  async setDesafioAndamento(desafio: Desafio) {
    let id = this.afAuth.auth.currentUser.uid;

    return await this.db
      .object("perfis/" + id + "/desafiosEmAndamento/" + desafio.key)
      .set({ pontosDesafio: desafio.pontos, dicasVistas: [] });
  }

  getDesafiosAndamento() {
    let id = this.afAuth.auth.currentUser.uid;
    let listaDesafiosEmAndamento = [];
    return this.db
      .list("perfis/" + id + "/desafiosEmAndamento")
      .snapshotChanges()
      .map(data => {
        listaDesafiosEmAndamento = [];

        data.forEach(desafioEmAndamentoUsuario => {
          let desafioUser = desafioEmAndamentoUsuario.payload.val();
          console.log(desafioEmAndamentoUsuario.key);
          this.db
            .object("desafios/" + desafioEmAndamentoUsuario.key)
            .snapshotChanges()
            .forEach(data => {
              let desafio: Desafio = data.payload.val();
              desafio.key = data.key;
              desafio.myDesafio = true;
              desafio.pontos = desafioUser.pontosAtuais;
              desafio.dicas = desafioUser.dicasVistas;

              listaDesafiosEmAndamento.push(desafio);
              console.log(listaDesafiosEmAndamento);
            });
        });
        return listaDesafiosEmAndamento;
      });
  }

  novaDicaUsuario(desafioKey, dicas) {
    let id = this.afAuth.auth.currentUser.uid;
    let allDicas = dicas;
    let desaf: {
      pontosDesafio: number;
      dicasVistas: string[];
      pontosAtuais: number;
    };
    let dicaSolicitada: string;
    return this.db
      .object("perfis/" + id + "/desafiosEmAndamento/" + desafioKey)
      .snapshotChanges()
      .map(data => {
        console.log(data.payload.val());
        desaf = data.payload.val();
        if (!desaf.dicasVistas) {
          desaf.dicasVistas = [];
          desaf.dicasVistas.push(allDicas[0]);
          desaf.pontosAtuais = desaf.pontosDesafio;
          dicaSolicitada = allDicas[0];
          console.log("entrei ahaha");

          this.db
            .object("perfis/" + id + "/desafiosEmAndamento/" + desafioKey)
            .update(desaf);
          return {
            dicaSVistas: desaf.dicasVistas,
            pontosDesafio: desaf.pontosAtuais
          };
        } else {
          let pontoTotal = desaf.pontosDesafio;
          let pontosAtuais = desaf.pontosAtuais;
          let pontoDivido = pontoTotal / 6;
          this.db
            .object("desafios/" + desafioKey + "/dicas")
            .snapshotChanges()
            .forEach(todasDicas => {
              let allDicas = todasDicas.payload.val();
              for (let index = 0; index < allDicas.length; index++) {
                const element = allDicas[index];

                if (desaf.dicasVistas.indexOf(element) < 0) {
                  desaf.dicasVistas.push(element);
                  dicaSolicitada = element;

                  desaf.pontosAtuais = Math.round(pontosAtuais - pontoDivido);

                  break;
                }
              }
              this.db
                .object("perfis/" + id + "/desafiosEmAndamento/" + desafioKey)
                .update(desaf);
            })
            .then(() => {
              console.log("ENTREI NO THEN");
            });
          return {
            dicaSVistas: desaf.dicasVistas,
            pontosDesafio: Math.round(pontosAtuais - pontoDivido)
          };
        }
      });

    //this.db.object("perfis/"+id+"/desafiosEmAndamento/"+desafioKey).update(dicas)
  }

  desistir(desafioKey) {
    let id = this.afAuth.auth.currentUser.uid;
    return this.db
      .object("perfis/" + id + "/desafiosEmAndamento/" + desafioKey)
      .remove();
  }
}
