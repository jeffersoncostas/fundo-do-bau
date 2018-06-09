import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular";

@Injectable()
export class LoadingsProvider {
  private loading: any;
  constructor(private loadingCtrl: LoadingController) {}

  loadingPadrao(texto) {
    this.loading = this.loadingCtrl.create({
      spinner: "hide",
      content:
        " <div class='fdba-loading' > <div class='fdba-loading__neon' ></div> <img class='fdba-loading__img' src='assets/imgs/fdba-logo.svg' >  </div>"
    });

    this.loading.present();
  }

  async loadingPadraoDismiss() {
    this.loading.dismiss();
  }
}
