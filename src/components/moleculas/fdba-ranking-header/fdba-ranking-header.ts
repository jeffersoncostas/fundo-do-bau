import { Component } from '@angular/core';

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
