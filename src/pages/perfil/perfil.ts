import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuario } from "../../models/usuario.model";
import { Subscription } from "rxjs/Subscription";
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { DatabaseProvider } from "../../providers/database/database";
import { Conquista } from "../../models/conquista.model";
import { AlertsProvider } from "../../providers/alerts/alerts";
import { TratamentoErrosProvider } from "../../providers/tratamento-erros/tratamento-erros";
import { Desafio } from "../../models/desafio.model";

@IonicPage()
@Component({
  selector: "page-perfil",
  templateUrl: "perfil.html"
})
export class PerfilPage {
  configSegment: string = "config";

  // dados capturados do firebase
  userData$: Usuario;
  userDataObservableSnapshot: Subscription;
  conquistasUsuario$: Conquista[];
  userAuth$: string;
  userAuthSubscription$: Subscription;

  desafiosConcluidos: Desafio[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private autenticacao: AutenticacaoProvider,
    private database: DatabaseProvider,
    private alerts: AlertsProvider,
    private erros: TratamentoErrosProvider
  ) {}
  ionViewWillEnter() {
    console.log(this.navParams.data, "PERFIL PAGEEE");
    if (this.navParams.data.configSegment) {
      this.configSegment = this.navParams.data.configSegment;
    }
  }

  ionViewDidEnter() {
    this.getUser();
    this.getUserData();
  }

  getUser() {
    this.userDataObservableSnapshot = this.autenticacao
      .getProfile()
      .subscribe(data => {
        this.userData$ = data;
        console.log(data);
        this.getUserConquistas();
        this.getDesafiosConcluidos();
      });
  }

  getUserConquistas() {
    this.database
      .getAllConquistasUsuario(this.userData$.conquistas)
      .then(data => (this.conquistasUsuario$ = data));
  }
  getUserData() {
    this.userAuthSubscription$ = this.autenticacao.getUser().subscribe(data => {
      console.log(data);
      this.userAuth$ = data.email;
    });
  }

  updatePerfil(newPerfil) {
    this.autenticacao.updateEmail(newPerfil.email).then(
      data => {
        if (!data) {
          this.alerts.alertaSimples(
            "Pronto!",
            "Seu e-mail foi alterado para " + newPerfil.email,
            ""
          );
        } else {
          let erroMessage = this.erros.tratarErros(data.code);
          this.alerts.alertaSimples("Algo errado!", erroMessage, "error");
        }
      },
      error => console.log(error)
    );
    this.autenticacao
      .updateNome(newPerfil.name)
      .then(data => console.log(data));
    this.autenticacao
      .updateUsername(newPerfil.username)
      .then(data => console.log(data));
  }

  getDesafiosConcluidos() {
    let desafiosConcluidosSub = this.database
      .getDesafiosConcluidos()
      .subscribe(data => {
        this.desafiosConcluidos = data;
        console.log(data);
        desafiosConcluidosSub.unsubscribe();
      });
  }

  verPaginaDesafio(desafio) {
    this.navCtrl.push("DesafioConcluidoPage", desafio);
  }

  // Encerrar eventos da página
  ionViewDidLeave() {
    this.userDataObservableSnapshot.unsubscribe();
    this.database.unsubscribeGetAllConquistasUsuario();
    this.userAuthSubscription$.unsubscribe();
  }
}
