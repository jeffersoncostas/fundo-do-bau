import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { LoadingsProvider } from "../../providers/loadings/loadings";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private autenticar: AutenticacaoProvider,
    private loading: LoadingsProvider,
    private alert: AlertController
  ) {}

  ionViewDidLoad() {}

  logar(user) {
    this.loading.loadingPadrao("Logando...");
    this.autenticar.login(user).then(
      data => {
        this.loading.loadingPadraoDismiss();
        this.navCtrl.setRoot(
          "TabsPage",
          {},
          { animate: true, direction: "forward" }
        );
      },
      error => {
        this.loading.loadingPadraoDismiss();
      }
    );
  }

  esqueciSenha() {
    console.log("esqueci");
    let alertSuccess = this.alert.create({
      cssClass: "fdba-modal-",
      title: "Prontinho!",
      message: "Veja sua caixa de entrada :)"
    });

    let alertFail = this.alert.create({
      cssClass: "fdba-modal-error",
      title: "Ixe!",
      message: "Parece que esse email não é válido :("
    });

    let alert = this.alert.create({
      cssClass: "fdba-modal-",
      title: "Resetar Senha",
      message: "Será enviado ao email instruções para resetar a senha",
      inputs: [
        {
          name: "email",
          placeholder: "Seu email",
          type: "email"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Resetar",
          role: "null",
          handler: data => {
            console.log(data);
            this.loading.loadingPadrao("verificando..");
            this.autenticar.resetarSenha(data.email).then(
              data => {
                console.log(data);
                this.loading.loadingPadraoDismiss();
                alertSuccess.present();
              },
              error => {
                this.loading.loadingPadraoDismiss();
                alertFail.present();
                console.log(error);
              }
            );
          }
        }
      ]
    });
    alert.present();
  }
}
