import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  login: string
  senha: number
  params = this.navParams.data;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.login = this.params.login;
    this.senha = this.params.senha;
    console.log('ionViewDidLoad HomePage');
  }

  testclick() {
    this.navCtrl.push('StyleGuidePage', { backbutton: false })

  }
  verOnboard() {
    this.navCtrl.push('OnboardPage')
  }

}
