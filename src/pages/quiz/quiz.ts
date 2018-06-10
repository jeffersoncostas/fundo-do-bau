import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DatabaseProvider } from "../../providers/database/database";
import { Subscription } from "rxjs/Subscription";
import { Desafio } from "../../models/desafio.model";
import "rxjs/add/operator/map";
import { AlertsProvider } from "../../providers/alerts/alerts";
import {
  entradaParabens,
  quizAlternativa
} from "../../animations/animation.animation";

@IonicPage()
@Component({
  selector: "page-quiz",
  templateUrl: "quiz.html",
  animations: [entradaParabens, quizAlternativa]
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
    private database: DatabaseProvider,
    private alert: AlertsProvider
  ) {}

  ionViewDidLoad() {
    this.desafio = this.navParams.data.desafio;
    console.log(this.navParams.data);
    //this.acessarDatabase();
    this.iniciarQuiz();
  }

  acessarDatabase() {
    this.databaseSubscriber$ = this.database
      .getDesafio("-LCKcui6vj_JlEraPRNZ")
      .subscribe(desafio => {
        this.desafio = desafio.payload.val();
        console.log(this.desafio);
        this.separarPerguntas();
        this.pontuacaoConfig();
        this.databaseSubscriber$.unsubscribe();
      });
  }

  iniciarQuiz() {
    this.separarPerguntas();
    this.pontuacaoConfig();
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
      this.alert.alertaSimples("Parabéns!!", "Resposta correta!", "");
    } else {
      console.log("resposta errada D:");
      this.alert.alertaSimples("Poxa :/", "Você errou!", "error");
    }

    if (this.paginacao == 4) {
      console.log("parabens, vc conseguiu " + this.quizPontos + " pontos");
      this.terminouQuiz();
    } else {
      this.paginacao++;
      this.separarPerguntas();
    }
  }

  pontuacaoConfig() {
    this.pontosPergunta = this.desafio.perguntas.pontos / 5;
  }

  terminouQuiz() {
    this.desafio.perguntas.pontos = this.quizPontos;
    let conquista = this.navParams.data.conquista;
    let desafioConquistaObj = { desafio: this.desafio, conquista: conquista };
    this.navCtrl.setRoot("ParabensQuizPage", desafioConquistaObj);
  }
}
