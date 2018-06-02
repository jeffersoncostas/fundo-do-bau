import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Desafio } from "../../models/desafio.model";

@IonicPage()
@Component({
  selector: "page-video-concluido",
  templateUrl: "video-concluido.html"
})
export class VideoConcluidoPage {
  desafio: Desafio = this.navParams.data;
  videoUrl: SafeResourceUrl;
  button: boolean = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private domSanitizer: DomSanitizer
  ) {
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.desafio.video
    );
  }

  ionViewDidLoad() {
    this.hideButtonTimer();
  }

  showButton() {
    console.log("Cliquei rs");
    this.button = true;
    this.hideButtonTimer();
  }

  hideButtonTimer() {
    setTimeout(() => {
      this.button = false;
    }, 4000);
  }
}
