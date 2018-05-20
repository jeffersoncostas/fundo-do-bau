import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { DatabaseProvider } from "../../providers/database/database";

import { Observable } from "rxjs/Observable";
import { Usuario } from "../../models/usuario.model";
import { AngularFireObject } from "angularfire2/database";
import { Subscription } from "rxjs/Subscription";
@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  // dados capturados do firebase
  userData$: Usuario;
  userDataObservableSnapshot: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private autenticacao: AutenticacaoProvider
  ) {}

  ionViewDidEnter() {
    this.getUser();
  }

  testclick() {
    this.navCtrl.push("StyleGuidePage", { backbutton: false });
  }
  verOnboard() {
    this.navCtrl.push("OnboardPage");
  }

  logoutTest() {
    this.autenticacao.logout().then(() => console.log("deslogado :)"));
  }

  quizTeste() {
    this.navCtrl.push("QuizPage");
  }

  getUser() {
    this.userDataObservableSnapshot = this.autenticacao
      .getProfile()
      .subscribe(data => {
        this.userData$ = data;
        console.log(data);
      });
  }

  // Encerrar eventos da página
  ionViewDidLeave() {
    this.userDataObservableSnapshot.unsubscribe();
  }
}
