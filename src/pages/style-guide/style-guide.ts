import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Desafio } from '../../models/desafio.model';
import { Usuario } from '../../models/usuario.model';

@IonicPage({

})
@Component({
  selector: 'page-style-guide',
  templateUrl: 'style-guide.html'
})
export class StyleGuidePage {
  backButton: boolean = true;
  titulo: string = 'TESTEEEE'
  desafios = [new Desafio('Vista Perfeita', '', 7, 20, 95, '-4.966599', '-39.014531', [], 'x', 0, '../../../assets/imgs/teste.png'),
  new Desafio('Sobralina', '', 8, 95, 65, '-4.966599', '-39.014531', [], 'x', 0, '../../../assets/imgs/teste.png')]
  usuario: Usuario;
  desafioDicas = new Desafio('Vista Perfeita', [{ descricao: "Cantor famoso falava deste local..." }, { descricao: "Bem conhecida, muita gente vai." }], 7, 20, 95, '-4.966599', '-39.014531', [], 'x', 0, '../../../assets/imgs/teste.png')

  desafioHeader = new Desafio('Vista Perfeita', '', 7, 20, 95, '-4.966599', '-39.014531', [], 'x', 0, '../../../assets/imgs/teste.png');
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.usuario = new Usuario('marmota', 'mamotinha', 'asd', '123', '0', '150', '', 0, 0, '', '')
    this.backButton = this.navParams.data.backButton
  }
  ionViewDidLoad() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => { this.usuario.latitude = position.coords.latitude; this.usuario.longitude = position.coords.longitude });
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
}
