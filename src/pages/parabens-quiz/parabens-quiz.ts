import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events
  ) {}

  ionViewDidLoad() {
    console.log(this.navParams.data.desafio);
    this.desafio = this.navParams.data.desafio;
    this.conquista = this.navParams.data.conquista;
  }

  verMinhasConquistas() {
    this.events.publish("parabens:quiz", {
      tabIndex: 2,
      configSegment: "conq"
    });

    this.showTab();
  }

  showTab() {
    document.querySelector(".tabs-md .tabbar")["classList"].add("tabbar-show");

    document.querySelector(".tabs-md .tabbar")["style"].bottom = "0px";

    document
      .querySelector(".tabs-md .tabbar")
      ["classList"].remove("tabbar-leave");
  }
}
