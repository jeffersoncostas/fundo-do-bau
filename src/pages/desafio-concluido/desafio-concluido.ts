import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Desafio } from "../../models/desafio.model";

@IonicPage()
@Component({
  selector: "page-desafio-concluido",
  templateUrl: "desafio-concluido.html"
})
export class DesafioConcluidoPage {
  desafio: Desafio;
  badges = [{ nome: "Desafio concluído!", icon: "checkmark" }];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    this.desafio = this.navParams.data;
  }

  ionViewDidLoad() {}

  verVideo() {
    this.navCtrl.push("VideoConcluidoPage", this.desafio);
  }
}
