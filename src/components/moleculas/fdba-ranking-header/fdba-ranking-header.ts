import { Component } from '@angular/core';

/**
 * Generated class for the FdbaRankingHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fdba-ranking-header',
  templateUrl: 'fdba-ranking-header.html'
})
export class FdbaRankingHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello FdbaRankingHeaderComponent Component');
    this.text = 'Hello World';
  }

}
