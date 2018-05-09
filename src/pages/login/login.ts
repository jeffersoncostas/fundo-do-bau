import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private autenticar: AutenticacaoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logar(user) {
    this.autenticar.login(user).then((data) => console.log('logado com sucesso', data), error => console.log(error))
  }
}
