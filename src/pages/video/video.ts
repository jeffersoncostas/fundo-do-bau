import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Desafio } from "../../models/desafio.model";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: "page-video",
  templateUrl: "video.html"
})
export class VideoPage {
  desafio: Desafio = this.navParams.data;
  videoUrl: SafeResourceUrl;
  button: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private domSanitizer: DomSanitizer
  ) {}

  ionViewDidLoad() {
    document
      .querySelector(".tabs-md .tabbar")
      ["classList"].remove("tabbar-show");

    document.querySelector(".tabs-md .tabbar")["style"].bottom = "-70px";

    document.querySelector(".tabs-md .tabbar")["classList"].add("tabbar-leave");

    console.log(this.desafio);
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.desafio.video
    );

    this.tempo();
  }

  hide() {
    document.querySelector(".ytp-chrome-top .ytp-share-button-visible")[
      "style"
    ].display =
      "none";
  }

  tempo() {
    setTimeout(() => {
      console.log("Já pode pular o video!");
      this.button = true;
    }, 1000);
  }
  irConquista() {
    this.navCtrl.push("ParabensVideoPage", this.desafio);
  }
}
