import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { DatabaseProvider } from "../../providers/database/database";

import { Observable } from "rxjs/Observable";
import { Usuario } from "../../models/usuario.model";
import { AngularFireObject } from "angularfire2/database";
import { Subscription } from "rxjs/Subscription";
import { Desafio } from "../../models/desafio.model";
@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  // dados capturados do firebase
  userData$: Usuario;
  userDataObservableSubscription: Subscription;
  listaDesafiosSubscription: Subscription;
  listaDesafios$: Desafio[];
  toogleFixed: boolean = false;

  home: string = "desafios";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private autenticacao: AutenticacaoProvider,
    private database: DatabaseProvider
  ) {
    setInterval(() => {}, 450);
  }

  ionViewDidEnter() {
    this.getUser();
    this.getDesafios();
  }
  ngOnChanges() {
    console.log("oi");

    this.toogleFixed = false;
  }

  getUser() {
    this.userDataObservableSubscription = this.autenticacao
      .getProfile()
      .subscribe(data => {
        this.userData$ = data;
        console.log(data);
      });
  }

  getDesafios() {
    this.listaDesafiosSubscription = this.database
      .getAllDesafios()
      .subscribe(data => {
        this.listaDesafios$ = [];
        this.listaDesafios$ = data;
        console.log(this.listaDesafios$);
      });
  }

  clickCard(desafio) {
    console.log(desafio);
    this.navCtrl.push("DesafioPage", desafio);
  }

  scroll(event) {
    if (event.scrollTop >= 70) {
      this.toogleFixed = true;
    } else {
      this.toogleFixed = false;
    }
    //console.log(this.toogleFixed);
  }

  scrollTop() {
    this.toogleFixed = false;
  }
  // Encerrar eventos da página
  ionViewDidLeave() {
    this.userDataObservableSubscription.unsubscribe();
    this.listaDesafiosSubscription.unsubscribe();
  }
}
