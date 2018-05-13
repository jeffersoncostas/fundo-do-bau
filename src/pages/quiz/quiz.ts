import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DatabaseProvider } from "../../providers/database/database";
import { Subscription } from "rxjs/Subscription";
import { Desafio } from "../../models/desafio.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { FdbaQuizComponent } from "../../components/moleculas/fdba-quiz/fdba-quiz";
import { Perguntas } from "../../models/perguntas.model";

@IonicPage()
@Component({
  selector: "page-quiz",
  templateUrl: "quiz.html"
})
export class QuizPage {
  desafio: Desafio;
  pergunta: string;
  resposta: string;
  alternativa: any;
  paginacao: number = 0;
  quizPontos: number = 0;
  pontosPergunta: number;

  databaseSubscriber$: Subscription;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: DatabaseProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad QuizPage");
    this.acessarDatabase();
  }

  acessarDatabase() {
    this.databaseSubscriber$ = this.database
      .getDesafio("-LCKcui6vj_JlEraPRNZ")
      .subscribe(desafio => {
        this.desafio = desafio.payload.val();
        console.log(this.desafio);
        this.separarPerguntas();
        this.pontuacaoConfig();
      });
  }

  clickAlternativa(alternativa) {
    this.verificarResposta(alternativa);
  }

  separarPerguntas() {
    this.pergunta = this.desafio.perguntas.perguntas[this.paginacao];
    this.resposta = this.desafio.perguntas.respostas[this.paginacao];
    this.alternativa = this.desafio.perguntas.todasAlternativas[this.paginacao];
  }

  verificarResposta(alternativa) {
    let pergunta = this.desafio.perguntas.perguntas[this.paginacao];
    let resposta = this.desafio.perguntas.respostas[this.paginacao];

    if (resposta === alternativa) {
      console.log("resposta correta ;)");
      this.quizPontos += this.pontosPergunta;
    } else {
      console.log("resposta errada D:");
    }

    this.paginacao++;

    if (this.paginacao == 5) {
      console.log("parabens, vc conseguiu " + this.quizPontos + " pontos");
    }

    this.separarPerguntas();
  }

  pontuacaoConfig() {
    this.pontosPergunta = this.desafio.perguntas.pontos / 5;
  }
}
