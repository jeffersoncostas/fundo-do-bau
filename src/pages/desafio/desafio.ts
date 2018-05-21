import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Desafio } from "../../models/desafio.model";

@IonicPage()
@Component({
  selector: "page-desafio",
  templateUrl: "desafio.html"
})
export class DesafioPage {
  desafio: Desafio = this.navParams.data;
  desafioAceito: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

  aceitarDesafio() {}
}
