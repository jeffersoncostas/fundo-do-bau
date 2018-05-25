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
  userDataObservableSubscription: Subscription;
  listaDesafiosSubscription: Subscription;
  userLocationSubscription;

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
      });
  }

  getDesafios() {
    this.listaDesafiosSubscription = this.location
      .getDesafiosLocation()
      .subscribe(
        data => {
          this.listaDesafios$ = data;
        },
        error => console.log(error)
      );
  }

  getUserLocation() {
    if (navigator.geolocation) {
      this.userLocationSubscription = navigator.geolocation.watchPosition(
        position => {
          this.userLatitude = position.coords.latitude;
          this.userLongitude = position.coords.longitude;
          console.log(this.userLatitude, this.userLongitude, position);
          this.location.setUserLocation(this.userLatitude, this.userLongitude);
          this.getDesafios();
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
    navigator.geolocation.clearWatch(this.userLocationSubscription);
  }
}
