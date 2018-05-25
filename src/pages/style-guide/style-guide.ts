import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Desafio } from '../../models/desafio.model';
import { Usuario } from '../../models/usuario.model';
import { AlertsProvider } from "../../providers/alerts/alerts";

@IonicPage({

})
@Component({
  selector: 'page-style-guide',
  templateUrl: 'style-guide.html'
})
export class StyleGuidePage {
  backButton: boolean = true;
  titulo: string = 'TESTEEEE';
  usuario: Usuario;
  valorInput: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private alerts: AlertsProvider) {
    this.usuario = new Usuario('marmota', 'mamotinha', [], 0, [], 0, 0, [], false)
    this.backButton = this.navParams.data.backButton;
    
  }
  ionViewDidLoad() {
    if (navigator.geolocation) {
      //navigator.geolocation.getCurrentPosition(position => { this.usuario.latitude = position.coords.latitude; this.usuario.longitude = position.coords.longitude });
    }

    this.view.showBackButton(this.backButton)


  }

  aceitarDesafioClick(result) {
    console.log(result)
  }

  redirecionarPagina(login) {
    console.log('teste de redirecionamento com dados')
    this.navCtrl.push('HomePage', login)
  }

  clickCardTeste() {
    console.log('teste')
  }

  achouDesafio(desafio: Desafio) {
    let desafioUsuario = [this.usuario, desafio]
    console.log('achou o desafio ' + desafio.nome)
    this.navCtrl.push('TesteDesafioDistanciaPage', desafioUsuario)
  }
  desistoDesafio(desafio: Desafio) {
    console.log('desisto do desafio ' + desafio.nome)
    console.log(this.usuario)
  }
  voltarHome() {
    this.navCtrl.popToRoot()
  }

  testeDica() {
    console.log('TESTE DICAASD')
  }

  clickModal(){
    this.alerts.alertaNaoAchou();
  }
}
