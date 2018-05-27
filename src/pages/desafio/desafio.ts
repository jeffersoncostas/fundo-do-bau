import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Desafio } from "../../models/desafio.model";
import { DatabaseProvider } from "../../providers/database/database";
import { AlertsProvider } from "../../providers/alerts/alerts";
import { LoadingsProvider } from "../../providers/loadings/loadings";
import { LocationProvider } from "../../providers/location/location";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: "page-desafio",
  templateUrl: "desafio.html"
})
export class DesafioPage {
  desafio: Desafio = this.navParams.data;
  allDicas = this.desafio.dicas;
  dicasSolicitadas: string[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: DatabaseProvider,
    private alert: AlertsProvider,
    private loading: LoadingsProvider,
    private location: LocationProvider
  ) {}

  ionViewDidLoad() {
    this.verificarMyDesafio();
    this.dicasSolicitadas.push(this.allDicas[0]);
  }

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
              .then(() => {
                this.alertConfirmar(true);

                this.pedirDica();
              })
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

  verificarMyDesafio() {
    if (this.desafio.myDesafio) {
      console.log("MEU DESAFIO", this.desafio.dicas);
    }
  }

  pedirDica() {
    console.log("pedindo dica");
    let uns = this.database
      .novaDicaUsuario(this.desafio.key, this.desafio.dicas)
      .subscribe(data => {
        console.log("DESAFIO COM DICA", data);
        this.desafio.myDesafio = true;
        this.dicasSolicitadas = data.dicaSVistas;
        this.desafio.dicas = data.dicaSVistas;
        this.desafio.pontos = data.pontosDesafio;
        uns.unsubscribe();
      });
  }

  desistir() {}

  achei() {
    console.log("achei");
    this.location.verificarDesafio(this.desafio.latLong);
  }
}
