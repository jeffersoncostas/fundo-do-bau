import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-teste-desafio-distancia',
  templateUrl: 'teste-desafio-distancia.html',
})
export class TesteDesafioDistanciaPage {
  url: string = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=-23.562984,-46.654261&destinations=-22.951669,-43.210466&key=AIzaSyDNzeVzMpK995gxHQgvyBQYrBzPvH-9dvA';
  params = this.navParams.data;
  latitudeDesafio: number;
  longitudeDesafio: number;
  latitudeUsuario: number;
  longitudeUsuario: number;
  distanceBetween: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.params)
    this.latitudeDesafio = this.params[1].latitude;
    this.longitudeDesafio = this.params[1].longitude;
    this.latitudeUsuario = this.params[0].latitude;
    this.longitudeUsuario = this.params[0].longitude;
    this.getDistanceBetween()
  }

  getDistanceBetween() {


    let lat2 = this.latitudeDesafio;
    let lon2 = this.longitudeDesafio;
    let lat1 = this.latitudeUsuario;
    let lon1 = this.longitudeUsuario;

    var
      RADIUSKILOMETERS = 6373,
      latR1 = this.deg2rad(lat1),
      lonR1 = this.deg2rad(lon1),
      latR2 = this.deg2rad(lat2),
      lonR2 = this.deg2rad(lon2),
      latDifference = latR2 - latR1,
      lonDifference = lonR2 - lonR1,
      a = Math.pow(Math.sin(latDifference / 2), 2) + Math.cos(latR1) * Math.cos(latR2) * Math.pow(Math.sin(lonDifference / 2), 2),
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
      dk = c * RADIUSKILOMETERS;
    let km = this.round(dk);
    this.distanceBetween = km;
  }
  deg2rad(deg) {
    var rad = deg * Math.PI / 180;
    return rad;
  };
  round(x) {
    return Math.round(x * 10) / 10;
  };

}
