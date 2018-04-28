import { Component } from '@angular/core';
@Component({
  selector: 'fdba-button',
  templateUrl: 'fdba-button.html',
  inputs: ['buttonText', 'type']
})
export class FdbaButtonComponent {

  buttonText: string;
  type: string;

  constructor() {
    console.log('Hello FdbaButtonComponent Component');
  }

}
