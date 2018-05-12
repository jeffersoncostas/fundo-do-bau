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
  login: string;
  senha: number;
  params = this.navParams.data;
  userData$: Usuario;
  userDataObservable: Observable<Usuario>;
  userDataObservableSnapshot: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private autenticacao: AutenticacaoProvider
  ) {
    this.autenticacao.estaLogado().then(id => {
      this.userDataObservable = this.autenticacao.getProfile(id).valueChanges();

      this.userDataObservableSnapshot = this.autenticacao
        .getProfile(id)
        .snapshotChanges()
        .subscribe(profile => {
          this.userData$ = profile.payload.val();
          console.log(this.userData$);
        });
    });
  }

  ionViewDidLoad() {
    this.login = this.params.login;
    this.senha = this.params.senha;
    console.log("ionViewDidLoad HomePage");
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
}
