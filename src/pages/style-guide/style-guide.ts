import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StyleGuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({

})
@Component({
  selector: 'page-style-guide',
  templateUrl: 'style-guide.html',
  styles: ['style-guide.scss']
})
export class StyleGuidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StyleGuidePage');
  }

}
