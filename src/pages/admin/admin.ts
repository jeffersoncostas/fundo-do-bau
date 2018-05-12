import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Desafio } from "../../models/desafio.model";
import { Perguntas } from "../../models/perguntas.model";
import { Conquista } from "../../models/conquista.model";
import { DatabaseProvider } from "../../providers/database/database";
import { Subscription } from "rxjs/Subscription";

@IonicPage()
@Component({
  selector: "page-admin",
  templateUrl: "admin.html"
})
export class AdminPage {
  perguntas: Perguntas = {
    perguntas: [],
    todasAlternativas: {
      0: [""],
      1: [""],
      2: [""],
      3: [""],
      4: [""]
    },
    respostas: [],
    pontos: 0
  };
  conquista: Conquista = {
    key: "",
    nome: "",
    descricao: "",
    imagem: "",
    background: ""
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
    conquista: "",
    imagem: ""
  };
  adminSegment = "conquista";

  listaConquistas$: Conquista[];
  listaConquistaSubscribe: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: DatabaseProvider
  ) {
    this.getConquistas();
  }

  ionViewDidLoad() {}

  click() {
    console.log(this.desafio);
  }
  novoDesafio() {
    console.log(this.desafio);
    this.database
      .novoDesafio(this.desafio)
      .then(
        data => console.log("pronto!", data.key),
        error => console.log("vishe!", error)
      );
  }
  novaConquista(conquista) {
    console.log(this.conquista);
    this.database
      .novaConquista(this.conquista)
      .then(
        data => console.log("pronto!", data.key),
        error => console.log("vishe!", error)
      );
  }
  getConquistas() {
    this.listaConquistaSubscribe = this.database
      .getAllConquistas()
      .subscribe(conquistas => {
        this.listaConquistas$ = [];
        conquistas.forEach(element => {
          console.log(element.payload.val());
          this.listaConquistas$.push(element.payload.val());
          console.log(this.listaConquistas$);
        });
      });
  }
}
