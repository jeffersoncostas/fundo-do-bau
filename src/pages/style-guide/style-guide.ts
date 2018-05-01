import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Desafio } from '../../models/desafio.model';
import { TesteDesafioDistanciaPage } from '../teste-desafio-distancia/teste-desafio-distancia';
import { Usuario } from '../../models/usuario.model';

@IonicPage({

})
@Component({
  selector: 'page-style-guide',
  templateUrl: 'style-guide.html'
})
export class StyleGuidePage {

  desafios = [{ nome: 'Vista Perfeita', dicas: [], dificuldade: 2, pontos: 50, qtdPessoas: 100, latitude: '-4.966599', longitude: '-39.014531', perguntas: [], video: 'x', conquista: '0', imagem: '../../../assets/imgs/teste.png' }, { nome: 'Sobralina', dicas: [], dificuldade: 2, pontos: 50, qtdPessoas: 100, latitude: '-4.978202', longitude: '-39.062926', perguntas: [], video: 'x', conquista: '0', imagem: '../../../assets/imgs/teste.png' }];
  usuario: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = new Usuario('marmota', 'mamotinha', 'asd', '123', '0', '150', '', 0, 0, '', '')


  }
  ionViewDidLoad() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => { this.usuario.latitude = position.coords.latitude; this.usuario.longitude = position.coords.longitude });
    }

  }

  aceitarDesafioClick(result) {
    console.log(result)
  }

  redirecionarPagina(login) {
    console.log('teste de redirecionamento com dados')
    this.navCtrl.push(HomePage, login)
  }

  clickCardTeste() {
    console.log('teste')
  }

  achouDesafio(desafio: Desafio) {
    let desafioUsuario = [this.usuario, desafio]
    console.log('achou o desafio ' + desafio.nome)
    this.navCtrl.push(TesteDesafioDistanciaPage, desafioUsuario)
  }
  desistoDesafio(desafio: Desafio) {
    console.log('desisto do desafio ' + desafio.nome)
    console.log(this.usuario)
  }
}
