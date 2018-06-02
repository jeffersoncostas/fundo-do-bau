import { Component } from '@angular/core';

/**
 * Generated class for the ListaCardRankingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lista-card-ranking',
  templateUrl: 'lista-card-ranking.html'
})
export class ListaCardRankingComponent {

  text: string;

  constructor() {
    console.log('Hello ListaCardRankingComponent Component');
    this.text = 'Hello World';
  }

}
