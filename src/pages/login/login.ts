import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';
import { LoadingsProvider } from '../../providers/loadings/loadings';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private autenticar: AutenticacaoProvider,
    private loading: LoadingsProvider) {
  }

  ionViewDidLoad() {

  }

  logar(user) {
    this.loading.loadingPadrao('Logando...')
    this.autenticar.login(user).then((data) => { this.loading.loadingPadraoDismiss(); this.navCtrl.setRoot('TabsPage') }, error => { this.loading.loadingPadraoDismiss() })
  }
}
