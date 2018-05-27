import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { DatabaseProvider } from "../../providers/database/database";

import { Observable } from "rxjs/Observable";
import { Usuario } from "../../models/usuario.model";
import { AngularFireObject } from "angularfire2/database";
import { Subscription } from "rxjs/Subscription";
import { Desafio } from "../../models/desafio.model";
import { LocationProvider } from "../../providers/location/location";
import { AlertsProvider } from "../../providers/alerts/alerts";
@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  // dados capturados do firebase
  userData$: Usuario;
  listaDesafiosEmAndamento$: Desafio[];

  userDataObservableSubscription: Subscription;
  listaDesafiosSubscription: Subscription;
  userLocationSubscription;
  desafiosEmAndamentoSubscription: Subscription;

  userLatitude: number;
  userLongitude: number;

  listaDesafios$: Desafio[];
  toogleFixed: boolean = false;

  home: string = "desafios";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private autenticacao: AutenticacaoProvider,
    private database: DatabaseProvider,
    private location: LocationProvider,
    private alert: AlertsProvider
  ) {
    setInterval(() => {}, 300);
  }

  ionViewDidEnter() {
    this.getUser();
    this.getUserLocation();
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
        this.userDataObservableSubscription.unsubscribe();
      });
  }

  getUserLocation() {
    if (navigator.geolocation) {
      this.userLocationSubscription = navigator.geolocation.getCurrentPosition(
        position => {
          this.userLatitude = position.coords.latitude;
          this.userLongitude = position.coords.longitude;
          console.log(this.userLatitude, this.userLongitude, position);
          this.location.setUserLocation(this.userLatitude, this.userLongitude);
          this.getDesafiosAndamento();
        },
        e =>
          this.alert.alertaSimples(
            "Opa!",
            "Você precisa ativar o GPS obter a melhor experiência no Fundo do Baú!",
            "error"
          )
      );

      if (!this.userLatitude || !this.userLongitude) {
        this.alert.alertaSimples(
          "Opa!",
          "Você precisa ativar o GPS para você ter a melhor experiência no Fundo do Baú!",
          "error"
        );
      }
    } else {
      console.log("aa");
    }
  }

  getDesafiosAndamento() {
    this.desafiosEmAndamentoSubscription = this.database
      .getDesafiosAndamento()
      .subscribe(data => {
        this.listaDesafiosEmAndamento$ = [];
        this.listaDesafiosEmAndamento$ = data;
        this.getDesafios();
        this.desafiosEmAndamentoSubscription.unsubscribe();
      });
  }

  getDesafios() {
    this.listaDesafiosSubscription = this.location
      .getDesafiosLocation(this.listaDesafiosEmAndamento$)
      .subscribe(
        data => {
          this.listaDesafios$ = data;
          console.log("desafios total", this.listaDesafios$);
          this.listaDesafiosSubscription.unsubscribe();
        },
        error => console.log(error)
      );
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

  refresh(refresher) {
    console.log(refresher);

    setTimeout(() => {
      this.subscribeAll().then(e => {
        refresher.complete();
      });
    }, 800);
  }
  async subscribeAll() {
    this.getUser();
    this.getUserLocation();
  }

  // Encerrar eventos da página
  ionViewDidLeave() {
    // this.userDataObservableSubscription.unsubscribe();
    // this.listaDesafiosSubscription.unsubscribe();
    // this.desafiosEmAndamentoSubscription.unsubscribe();
    navigator.geolocation.clearWatch(this.userLocationSubscription);
  }
}
