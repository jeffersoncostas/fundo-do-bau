import { Component, EventEmitter } from '@angular/core';
@Component({
  selector: 'fdba-button',
  templateUrl: 'fdba-button.html',
  outputs: ['clickButton'],
  inputs: ['buttonText', 'type']
})
export class FdbaButtonComponent {

  buttonText: string;
  type: string;
  clickButton = new EventEmitter();

  constructor() {
    console.log('Hello FdbaButtonComponent Component');
  }

  clickButtonEmit(click) {
    this.clickButton.next(click);
  }
}
