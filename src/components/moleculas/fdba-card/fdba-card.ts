import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'fdba-card',
  templateUrl: 'fdba-card.html',
  inputs: ['desafioObject'],
  outputs: ['clickCard']
})
export class FdbaCardComponent {
  clickCard = new EventEmitter();
  desafioObject: Object;
  constructor() {

  }

  clickCardEmit(click) {
    this.clickCard.next(click);

  }

}
