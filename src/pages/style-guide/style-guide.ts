import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage({

})
@Component({
  selector: 'page-style-guide',
  templateUrl: 'style-guide.html'
})
export class StyleGuidePage {

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
}
