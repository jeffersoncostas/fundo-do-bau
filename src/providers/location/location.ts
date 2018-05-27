import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, snapshotChanges } from "angularfire2/database";
import { Desafio } from "../../models/desafio.model";

@Injectable()
export class LocationProvider {
  private constdistanciaMin: number = 20;
  private desafioProximo: { key: string; location: number[] };
  private listaIdDesafiosProximos = [];
  private listaDesafiosProximos: Desafio[] = [];
  private desafiosAndamento: Desafio[] = [];
  private userLatitude: number;
  private userLongitude: number;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {}

  setUserLocation(userLatitude, userLongitude) {
    this.userLatitude = userLatitude;
    this.userLongitude = userLongitude;
  }

  getDesafiosLocation(desafiosAndamento) {
    this.desafiosAndamento = desafiosAndamento;
    return this.db
      .list("desafioLocation")
      .snapshotChanges()
      .map(data => {
        this.listaDesafiosProximos = [];
        this.listaIdDesafiosProximos = [];
        data.forEach(element => {
          let location = element.payload.val();
          console.log(location);
          let resultDistancia = this.distanciaUsuarioDesafio(
            location[0],
            location[1]
          );
          console.log(resultDistancia);
          if (resultDistancia) {
            let desafioProximo = {
              key: element.payload.key,
              location: location
            };
            this.listaIdDesafiosProximos.push(desafioProximo);
          }
        });
        console.log(this.listaIdDesafiosProximos);

        this.getDesafiosProximos();

        return this.listaDesafiosProximos;
      });
  }

  private distanciaUsuarioDesafio(lat2, lon2) {
    let lat1 = this.userLatitude;
    let lon1 = this.userLongitude;

    let RADIUSKILOMETERS = 6373,
      latR1 = this.deg2rad(lat1),
      lonR1 = this.deg2rad(lon1),
      latR2 = this.deg2rad(lat2),
      lonR2 = this.deg2rad(lon2),
      latDifference = latR2 - latR1,
      lonDifference = lonR2 - lonR1,
      a =
        Math.pow(Math.sin(latDifference / 2), 2) +
        Math.cos(latR1) *
          Math.cos(latR2) *
          Math.pow(Math.sin(lonDifference / 2), 2),
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
      dk = c * RADIUSKILOMETERS;
    let km = this.round(dk);

    if (km <= 1.5) {
      return km;
    }
  }

  private distanciaUsuarioDesafioComplete(lat2, lon2, raioDesafio) {
    let lat1 = this.userLatitude;
    let lon1 = this.userLongitude;

    let RADIUSKILOMETERS = 6378100,
      latR1 = this.deg2rad(lat1),
      lonR1 = this.deg2rad(lon1),
      latR2 = this.deg2rad(lat2),
      lonR2 = this.deg2rad(lon2),
      latDifference = latR2 - latR1,
      lonDifference = lonR2 - lonR1,
      a =
        Math.pow(Math.sin(latDifference / 2), 2) +
        Math.cos(latR1) *
          Math.cos(latR2) *
          Math.pow(Math.sin(lonDifference / 2), 2),
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
      dk = c * RADIUSKILOMETERS;
    let km = this.round2(dk);
    console.log(dk);

    if (dk <= raioDesafio / 1000) {
      console.log("Voce achou o desafio", dk);
      return dk;
    }
  }

  private deg2rad(deg) {
    var rad = deg * Math.PI / 180;
    return rad;
  }
  private round(x) {
    return Math.round(x * 10) / 10;
  }

  private round2(x) {
    return Math.round(x * 10) / 10;
  }

  private async getDesafiosProximos() {
    this.listaDesafiosProximos = [];
    return this.listaIdDesafiosProximos.forEach(desafioProx => {
      this.db
        .object("desafios/" + desafioProx.key)
        .snapshotChanges()
        .forEach(data => {
          let key = data.payload.key;
          let desafio: Desafio = data.payload.val();
          desafio.key = key;
          this.desafiosAndamento.forEach(el => {
            if (el.key == desafio.key) {
              desafio.myDesafio = true;
              desafio.dicas = el.dicas;
              desafio.pontos = el.pontos;
            }
          });
          this.listaDesafiosProximos.push(desafio);
        });
    });
  }

  verificarDesafio(latLongDesafio, raioDesafio) {
    let localUser = { latitude: 0, longitude: 0 };
    console.log(this.userLatitude, this.userLongitude);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.userLatitude = position.coords.latitude;
        this.userLongitude = position.coords.longitude;
        this.distanciaUsuarioDesafioComplete(
          latLongDesafio[0],
          latLongDesafio[1],
          raioDesafio
        );
        console.log(this.userLatitude, this.userLongitude);
      });
    }
  }
}
