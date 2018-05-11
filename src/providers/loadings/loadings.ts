import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoadingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingsProvider {
  loading: any;
  constructor(public loadingCtrl: LoadingController) {
    console.log('Hello LoadingsProvider Provider');
  }

  loadingPadrao(texto) {
    this.loading = this.loadingCtrl.create({
      content: texto
    });

    this.loading.present();
  }

  loadingPadraoDismiss() {
    this.loading.dismiss()
  }

}
