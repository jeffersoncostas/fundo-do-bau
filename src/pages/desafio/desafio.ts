import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Desafio } from "../../models/desafio.model";
import { DatabaseProvider } from "../../providers/database/database";
import { AlertsProvider } from "../../providers/alerts/alerts";
import { LoadingsProvider } from "../../providers/loadings/loadings";

@IonicPage()
@Component({
  selector: "page-desafio",
  templateUrl: "desafio.html"
})
export class DesafioPage {
  desafio: Desafio = this.navParams.data;
  desafioAceito: boolean = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: DatabaseProvider,
    private alert: AlertsProvider,
    private loading: LoadingsProvider
  ) {}

  ionViewDidLoad() {}

  alertAceitar() {
    console.log("ola");
    this.alert.alertaHandler(
      "<center > Vamos lá!</center>",
      "Você está a um passo de aceitar o desafio <b>" +
        this.desafio.nome +
        "</b>",
      [
        {
          text: "Aceito!",
          handler: () => {
            console.log(this.desafio);
            this.database
              .setDesafioAndamento(this.desafio)
              .then(() => this.alertConfirmar(true))
              .catch(() => this.alertConfirmar(false));
          }
        },
        { text: "Agora não" }
      ],
      ""
    );
  }
  alertConfirmar(boolean) {
    if (boolean)
      this.alert.alertaSimples(" <center><h2> Pronto! </h2></center>", "", "");
    else
      this.alert.alertaSimples(
        "Algo deu errado",
        "Tente novamente :/",
        "error"
      );
  }
}
