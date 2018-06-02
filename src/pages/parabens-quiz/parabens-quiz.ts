import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Desafio } from "../../models/desafio.model";
import { Conquista } from "../../models/conquista.model";

@IonicPage()
@Component({
  selector: "page-parabens-quiz",
  templateUrl: "parabens-quiz.html"
})
export class ParabensQuizPage {
  desafio: Desafio;
  conquista: Conquista;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log(this.navParams.data.desafio);
    this.desafio = this.navParams.data.desafio;
    this.conquista = this.navParams.data.conquista;
  }

  verMinhasConquistas() {
    this.navCtrl.setRoot("TabsPage", { tabIndex: 2, configSegment: "conq" });
  }
}
