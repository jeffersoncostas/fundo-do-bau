import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SlidesModel } from '../../components/moleculas/fdba-slider/slides-model.model';

@IonicPage()
@Component({
  selector: 'page-onboard',
  templateUrl: 'onboard.html',
})
export class OnboardPage {
  listaSlides: SlidesModel[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardPage asdasd');
    this.getSlides()
  }

  login() {
    console.log('login');
  }
  cadastrar() {
    console.log('cadastrar');
  }
  getSlides() {
    this.listaSlides.push(new SlidesModel('../../assets/imgs/logo.svg', 'Titutlo 1', 'Subtitulo 1'))
    this.listaSlides.push(new SlidesModel('../../assets/imgs/logo.svg', 'Titutlo 2', 'Subtitulo 2'))
    this.listaSlides.push(new SlidesModel('../../assets/imgs/logo.svg', 'Titutlo 3', 'Subtitulo 3'))
  }
}
