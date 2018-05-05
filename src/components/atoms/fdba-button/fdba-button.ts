import { Component, EventEmitter } from '@angular/core';
@Component({
  selector: 'fdba-button',
  templateUrl: 'fdba-button.html',
  outputs: ['clickButton'],
  inputs: ['buttonText', 'type', 'cor', 'altura']
})
export class FdbaButtonComponent {

  buttonText: string;
  type: string;
  altura: string;
  cor: string;
  clickButton = new EventEmitter();

  constructor() {
  }

  clickButtonEmit(click): void {
    this.clickButton.next(click);
  }
}
