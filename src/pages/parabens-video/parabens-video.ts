import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Desafio } from "../../models/desafio.model";
import { RecompensasProvider } from "../../providers/recompensas/recompensas";
import { DatabaseProvider } from "../../providers/database/database";
import { Conquista } from "../../models/conquista.model";
import {
  entradaParabens,
  entradaConquista,
  badgePontos,
  slideUp
} from "../../animations/animation.animation";

@IonicPage()
@Component({
  selector: "page-parabens-video",
  templateUrl: "parabens-video.html",
  animations: [entradaParabens, entradaConquista, badgePontos, slideUp]
})
export class ParabensVideoPage {
  desafio: Desafio;
  conquista: Conquista;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private recompensasProv: RecompensasProvider,
    private database: DatabaseProvider
  ) {
    this.desafio = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log("AAAAAAAAAAA PARABENS VIDEO");
    this.darConquista();
  }

  confirmarNao() {}

  darConquista() {
    let getconquistaSub = this.recompensasProv
      .getConquista(this.desafio)
      .subscribe(data => {
        this.conquista = data;
        console.log(this.conquista);
        getconquistaSub.unsubscribe();
      });

    let setConquistaSub = this.recompensasProv
      .darConquista(this.desafio)
      .subscribe(() => {
        setConquistaSub.unsubscribe();
      });
  }

  aceitarQuiz() {
    let objDesafioConquista = {
      desafio: this.desafio,
      conquista: this.conquista
    };
    this.navCtrl.setRoot("QuizPage", objDesafioConquista);
  }
}
