import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()

@Component({
  templateUrl: 'tabs.html',
  selector: 'tabs'
})
export class TabsPage {

  ranking = 'RankingPage';
  home = 'HomePage';
  perfil = 'PerfilPage';
  styleguide = 'StyleGuidePage';
  params = this.navParams.data;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  click(): void {

  }
}
