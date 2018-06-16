import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";
import { Usuario } from "../../models/usuario.model";
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { LoadingsProvider } from "../../providers/loadings/loadings";
import { TratamentoErrosProvider } from "../../providers/tratamento-erros/tratamento-erros";
import { AlertsProvider } from "../../providers/alerts/alerts";
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: "page-criar-conta",
  templateUrl: "criar-conta.html"
})
export class CriarContaPage {
  user: Usuario;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private autenticar: AutenticacaoProvider,
    private loading: LoadingsProvider,
    private tratamentoErro: TratamentoErrosProvider,
    private alert: AlertsProvider,
    private events: Events
  ) {}

  ionViewDidLoad() {}

  novaConta(novaContaObject) {
    this.loading.loadingPadrao("Criando conta...");
    this.user = new Usuario(
      "",
      novaContaObject.username,
      [""],
      0,
      [""],
      0,
      0,
      [""],
      false
    );
    this.autenticar
      .register(novaContaObject, this.user)
      .then(data => {
        this.loading.loadingPadraoDismiss();
        this.navCtrl.setRoot("TabsPage");

        this.events.publish("criar-conta");
      })
      .catch(error => {
        this.loading.loadingPadraoDismiss();
        console.log(error);
        let erro = this.tratamentoErro.tratarErros(error.code);
        this.alert.alertaSimples("Vish!", erro, "error");
      });
  }
}
