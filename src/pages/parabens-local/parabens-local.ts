import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Desafio } from "../../models/desafio.model";

@IonicPage()
@Component({
  selector: "page-parabens-local",
  templateUrl: "parabens-local.html"
})
export class ParabensLocalPage {
  desafio: Desafio = this.navParams.data;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log(this.desafio);
    document.querySelector(".tabs-md .tabbar")["style"].bottom = "-70px";

    document.querySelector(".tabs-md .tabbar")["classList"].add("tabbar-leave");
  }

  ionViewDidLeave() {
    // document.querySelector(".tabs-md .tabbar")["classList"].add("tabbar-show");
    // document.querySelector(".tabs-md .tabbar")["style"].bottom = "0px";
  }
}
