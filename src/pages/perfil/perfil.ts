import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";
import { Usuario } from "../../models/usuario.model";
import { Subscription } from "rxjs/Subscription";
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { DatabaseProvider } from "../../providers/database/database";
import { Conquista } from "../../models/conquista.model";
import { AlertsProvider } from "../../providers/alerts/alerts";
import { TratamentoErrosProvider } from "../../providers/tratamento-erros/tratamento-erros";
import { Desafio } from "../../models/desafio.model";
import { LoadingsProvider } from "../../providers/loadings/loadings";

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
    private erros: TratamentoErrosProvider,
    private loading: LoadingsProvider,
    private events: Events
  ) {}
  ionViewWillEnter() {
    console.log(this.navParams.data, "PERFIL PAGEEE");
    if (this.navParams.data.configSegment) {
      this.configSegment = this.navParams.data.configSegment;
    }
  }

  ionViewDidEnter() {
    console.log(this.navParams.data, "PERFIL PAGEEE");

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
        this.userDataObservableSnapshot.unsubscribe();
      });
  }

  getUserConquistas() {
    if (this.userData$.conquistas) {
      this.database
        .getAllConquistasUsuario(this.userData$.conquistas)
        .then(data => (this.conquistasUsuario$ = data));
    } else {
      this.conquistasUsuario$ = [];
    }
  }
  getUserData() {
    this.userAuthSubscription$ = this.autenticacao.getUser().subscribe(data => {
      console.log(data);
      this.userAuth$ = data.email;
      this.userAuthSubscription$.unsubscribe();
    });
  }

  updatePerfil(newPerfil) {
    this.loading.loadingPadrao("Um momento..");
    this.autenticacao
      .updateEmail(newPerfil.email)
      .then(
        data => {
          if (!data) {
            this.loading.loadingPadraoDismiss();
          } else {
            let erroMessage = this.erros.tratarErros(data.code);
            this.alerts.alertaSimples("Algo errado!", erroMessage, "error");
            this.loading.loadingPadraoDismiss();
          }
        },
        error => console.log(error)
      )
      .then(() => {
        this.autenticacao
          .updateNome(newPerfil.name)
          .then(data => (this.userData$.nome = newPerfil.name));
      })
      .then(() => {
        this.autenticacao
          .updateUsername(newPerfil.username)
          .then(data => (this.userData$.username = newPerfil.username));
      })
      .then(() => {
        this.alerts.alertaSimples("Pronto!", "Perfil atualizado", "");
      });
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
  logout() {
    this.loading.loadingPadrao("deslogando..");
    this.autenticacao
      .logout()
      .then(() => {
        this.loading.loadingPadraoDismiss();
        this.events.publish("logout");
        this.alerts.alertaSimples("Deslogado!", "Você saiu da sua conta", "");
      })
      .catch(e => {
        console.log(e);
      });
  }

  // Encerrar eventos da página
  ionViewDidLeave() {
    this.userAuthSubscription$.unsubscribe();
  }
}
