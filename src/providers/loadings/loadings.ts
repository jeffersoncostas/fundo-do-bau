import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular";

@Injectable()
export class LoadingsProvider {
  loading: any;
  constructor(public loadingCtrl: LoadingController) {}

  loadingPadrao(texto) {
    this.loading = this.loadingCtrl.create({
      content: texto
    });

    this.loading.present();
  }

  loadingPadraoDismiss() {
    this.loading.dismiss();
  }
}
