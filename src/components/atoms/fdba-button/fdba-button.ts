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
  clickButton = new EventEmitter();

  constructor() {
    console.log('Hello FdbaButtonComponent Component');
  }

  clickButtonEmit(click): void {
    this.clickButton.next(click);
  }
}
