import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario.model';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';


@IonicPage()
@Component({
  selector: 'page-criar-conta',
  templateUrl: 'criar-conta.html',
})
export class CriarContaPage {
  user: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private autenticar: AutenticacaoProvider) {
  }

  ionViewDidLoad() {
  }

  novaConta(novaContaObject) {
    this.user = new Usuario('', novaContaObject.username, novaContaObject.email, novaContaObject.senhas.password, '', 0, '', 0, 0, '', false)
    console.log(this.user)
    this.autenticar.register(this.user).then((data) => console.log("Conta criada, parabens", data), error => console.log)
  }
}
