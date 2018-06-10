import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Desafio } from "../../models/desafio.model";
import { RecompensasProvider } from "../../providers/recompensas/recompensas";
import {
  parabensBau,
  entradaParabens,
  popsUp,
  slideUp
} from "../../animations/animation.animation";

@IonicPage()
@Component({
  selector: "page-parabens-local",
  templateUrl: "parabens-local.html",
  animations: [parabensBau, entradaParabens, popsUp, slideUp]
})
export class ParabensLocalPage {
  desafio: Desafio = this.navParams.data;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private recompensasProv: RecompensasProvider
  ) {}

  ionViewDidLoad() {
    console.log(this.desafio);
    document.querySelector(".tabs-md .tabbar")["style"].bottom = "-70px";

    document.querySelector(".tabs-md .tabbar")["classList"].add("tabbar-leave");
    this.darPontos();
  }

  darPontos() {
    let pontosSub = this.recompensasProv
      .darPontos(this.desafio)
      .subscribe(data => {
        console.log("Ganhou ", data);
        pontosSub.unsubscribe();
      });
  }

  ionViewDidLeave() {
    // document.querySelector(".tabs-md .tabbar")["classList"].add("tabbar-show");
    // document.querySelector(".tabs-md .tabbar")["style"].bottom = "0px";
  }
}
