import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'

import { SlidesModel } from '../../components/moleculas/fdba-slider/slides-model.model';
import { animate } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-onboard',
  templateUrl: 'onboard.html',
})
export class OnboardPage {
  listaSlides: SlidesModel[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private ionicStorage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardPage asdasd');
    this.getSlides()
  }

  login() {
    console.log('login');
    this.ionicStorage.set('OnboardPage', true);
    this.navCtrl.setRoot('LoginPage', {}, { animate: true, direction: 'forward' })
  }
  cadastrar() {
    console.log('cadastrar');
    this.ionicStorage.set('OnboardPage', true);
    this.navCtrl.setRoot('CriarContaPage', {}, { animate: true, direction: 'forward' })

  }
  getSlides() {
    this.listaSlides.push(new SlidesModel('../../assets/imgs/logo.svg', 'Titutlo 1', 'Subtitulo 1'))
    this.listaSlides.push(new SlidesModel('../../assets/imgs/logo.svg', 'Titutlo 2', 'Subtitulo 2'))
    this.listaSlides.push(new SlidesModel('../../assets/imgs/logo.svg', 'Titutlo 3', 'Subtitulo 3'))
  }
}
