import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";

@Injectable()
export class AlertsProvider {
  constructor(private alert: AlertController) {
    console.log("Hello AlertsProvider Provider");
  }

  alertaSimples(title, message, error?, handler?) {
    if (message == "Você precisa fazer o login novamente") {
      let alertSuccess2 = this.alert.create({
        cssClass: "fdba-modal-" + error,
        title: title,
        message: message,
        buttons: [
          {
            text: "Ok",
            handler: data => {
              handler;
            }
          }
        ]
      });
      return alertSuccess2.present();
    }
    let alertSuccess = this.alert.create({
      cssClass: "fdba-modal-" + error,
      title: title,
      message: message
    });
    console.log(error);
    alertSuccess.present();
  }

  alertaNaoAchou(){
    let alert = this.alert.create({
      cssClass: "fdba-modal-naoAchou",
      message: "Você não me achou ainda, me procure mais um pouco",
      buttons: ['OK']
    });
    alert.present();
  }
}
