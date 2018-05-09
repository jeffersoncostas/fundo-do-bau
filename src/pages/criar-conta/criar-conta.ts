import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario.model';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';
import { LoadingsProvider } from '../../providers/loadings/loadings';


@IonicPage()
@Component({
  selector: 'page-criar-conta',
  templateUrl: 'criar-conta.html',
})
export class CriarContaPage {
  user: Usuario;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private autenticar: AutenticacaoProvider,
    private loading: LoadingsProvider) {
  }

  ionViewDidLoad() {
  }

  novaConta(novaContaObject) {
    this.loading.loadingPadrao('Criando conta...')
    this.user = new Usuario('', novaContaObject.username, [''], 0, [''], 0, 0, [''], false)
    console.log(this.user)
    this.autenticar.register(novaContaObject, this.user).then((data) => { this.loading.loadingPadraoDismiss(); this.navCtrl.setRoot('TabsPage') }, error => this.loading.loadingPadraoDismiss())
  }


}
