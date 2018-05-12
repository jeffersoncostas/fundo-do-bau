import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Desafio } from "../../models/desafio.model";
import { Perguntas } from "../../models/perguntas.model";
import { Conquista } from "../../models/conquista.model";

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-admin",
  templateUrl: "admin.html"
})
export class AdminPage {
  perguntas: Perguntas = {
    perguntas: [],
    todasAlternativas: [
      {
        pergunta0: [
          { alternativa: "" },
          { alternativa: "" },
          { alternativa: "" },
          { alternativa: "" }
        ]
      },
      {
        pergunta1: [
          { alternativa: "" },
          { alternativa: "" },
          { alternativa: "" },
          { alternativa: "" }
        ]
      },
      {
        pergunta2: [
          { alternativa: "" },
          { alternativa: "" },
          { alternativa: "" },
          { alternativa: "" }
        ]
      },
      {
        pergunta3: [
          { alternativa: "" },
          { alternativa: "" },
          { alternativa: "" },
          { alternativa: "" }
        ]
      },
      {
        pergunta4: [
          { alternativa: "" },
          { alternativa: "" },
          { alternativa: "" },
          { alternativa: "" }
        ]
      }
    ],
    respostas: [],
    pontos: 0
  };
  conquista: Conquista = {
    nome: "",
    descricao: "",
    imagem: ""
  };
  desafio: Desafio = {
    nome: "",
    dicas: [],
    dificuldade: 0,
    pontos: 0,
    qtdPessoas: 0,
    latitude: 0,
    longitude: 0,
    perguntas: this.perguntas,
    video: "",
    conquista: this.conquista,
    imagem: ""
  };
  adminSegment = "desafio";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

  novoDesafio() {
    console.log(this.desafio);
  }
}
