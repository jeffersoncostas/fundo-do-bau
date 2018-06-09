import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { DatabaseProvider } from "../../providers/database/database";
import { popsUp } from "../../animations/animation.animation";

import { Usuario } from "../../models/usuario.model";
import { Subscription } from "rxjs/Subscription";
import { Desafio } from "../../models/desafio.model";
import { LocationProvider } from "../../providers/location/location";
import { AlertsProvider } from "../../providers/alerts/alerts";
import { Geolocation } from "@ionic-native/geolocation";
import { LoadingsProvider } from "../../providers/loadings/loadings";
@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [popsUp]
})
export class HomePage {
  // dados capturados do firebase
  userData$: Usuario;
  listaDesafiosEmAndamento$: Desafio[];
  listaDesafiosConcluidos$: Desafio[];

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
    private alert: AlertsProvider,
    private geolocation: Geolocation,
    private loading: LoadingsProvider
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
    //this.loading.loadingPadrao("carregando");
    console.log("ENTREI AQUI NA GEO");
    this.geolocation
      .getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      })
      .then(position => {
        this.userLatitude = position.coords.latitude;
        this.userLongitude = position.coords.longitude;
        console.log(this.userLatitude, this.userLongitude, position);
        this.location.setUserLocation(this.userLatitude, this.userLongitude);
        this.getDesafiosAndamento();
      })
      .catch(() => {
        this.alert.alertaSimples(
          "Opa!",
          "Você precisa ativar o GPS obter a melhor experiência no Fundo do Baú! primeiro erro",
          "error"
        );
      });

    setTimeout(() => {
      if (!this.userLatitude || !this.userLongitude) {
        this.alert.alertaSimples(
          "Opa!",
          "Você precisa ativar o GPS para você ter a melhor experiência no Fundo do Baú! segundo erro",
          "error"
        );
      }
    }, 4000);
  }

  getDesafiosAndamento() {
    this.desafiosEmAndamentoSubscription = this.database
      .getDesafiosAndamento()
      .subscribe(data => {
        this.listaDesafiosEmAndamento$ = [];
        this.listaDesafiosEmAndamento$ = data;
        this.getDesafiosConcluidos();
        this.desafiosEmAndamentoSubscription.unsubscribe();
      });
  }

  getDesafiosConcluidos() {
    let desafiosConcluidosSub = this.database
      .getDesafiosConcluidos()
      .subscribe(data => {
        this.listaDesafiosConcluidos$ = data;
        console.log(data, "desafios concluidos");
        this.getDesafios();
        desafiosConcluidosSub.unsubscribe();
      });
  }

  getDesafios() {
    this.listaDesafiosSubscription = this.location
      .getDesafiosLocation(
        this.listaDesafiosEmAndamento$,
        this.listaDesafiosConcluidos$
      )
      .subscribe(
        data => {
          this.listaDesafios$ = data;
          console.log("desafios total", this.listaDesafios$);
          this.listaDesafiosSubscription.unsubscribe();
          //this.loading.loadingPadraoDismiss();
        },
        error => console.log(error)
      );
  }

  clickCard(desafio: Desafio) {
    console.log(desafio);
    if (desafio.complete) {
      return this.navCtrl.push("DesafioConcluidoPage", desafio);
    }
    this.navCtrl.push("DesafioPage", desafio);
  }

  scroll(event) {
    if (event.scrollTop >= 70) {
      this.toogleFixed = true;
    } else {
      this.toogleFixed = false;
    }
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
