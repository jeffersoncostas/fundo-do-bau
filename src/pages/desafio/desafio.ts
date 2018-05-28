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
        { text: "Agora não" },
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
        }
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

  desistir() {
    let that = this;
    let desistirDb = function() {
      that.database
        .desistir(that.desafio.key)
        .then(() => that.navCtrl.setRoot("HomePage"));
    };

    this.alert.alertaHandler(
      "Já vai desistir?",
      "Você tem certeza que quer desistir de me encontrar?",
      [
        { text: "mudei de idea" },
        {
          text: "sim",
          handler: () => {
            desistirDb();
          }
        }
      ],
      "error"
    );
  }

  achei() {
    console.log("achei");
    console.log("raio", this.desafio.raio);
    this.alert.alertaHandler(
      "Uau!",
      "Você tem certeza que me achou? Se não tiver me achado você perderá <b>1 ponto </b> deste desafio!",
      [
        { text: "Não" },
        { text: "Tenho certeza!", handler: () => this.verificarAchei() }
      ],
      ""
    );
  }

  verificarAchei() {
    this.location
      .verificarDesafio(this.desafio.latLong, this.desafio.raio, this.desafio)
      .then(data => {
        if (data == 1) {
        } else {
          this.desafio.pontos = data;
          this.naoAchou();
        }
      });
  }

  naoAchou() {
    this.alert.alertaHandler(
      "Você ainda não me achou!",
      "Você perdeu <b>1 ponto </b> por não ter me achado :/ </br> Mais cuidado na próxima...",
      [{ text: "certo!" }],
      "error"
    );
  }
}
