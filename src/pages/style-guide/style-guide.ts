import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Desafio } from '../../models/desafio.model';

@IonicPage({

})
@Component({
  selector: 'page-style-guide',
  templateUrl: 'style-guide.html'
})
export class StyleGuidePage {

  desafios = [{ nome: 'Vista Perfeita', dicas: [], dificuldade: 2, pontos: 50, qtdPessoas: 100, latitude: 0, longitude: 0, perguntas: [], video: 'x', conquista: '0', imagem: '../../../assets/imgs/teste.png' }, { nome: 'Sobralina', dicas: [], dificuldade: 2, pontos: 50, qtdPessoas: 100, latitude: 0, longitude: 0, perguntas: [], video: 'x', conquista: '0', imagem: '../../../assets/imgs/teste.png' }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StyleGuidePage');
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
    console.log('achou o desafio ' + desafio.nome)
  }
  desistoDesafio(desafio: Desafio) {
    console.log('desisto do desafio ' + desafio.nome)
  }
}
