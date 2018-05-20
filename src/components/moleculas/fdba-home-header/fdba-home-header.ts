import { Component } from '@angular/core';
// import { FdbaButton } from '';

@Component({
  selector: 'fdba-home-header',
  templateUrl: 'fdba-home-header.html'
})
export class FdbaHomeHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello FdbaHomeHeaderComponent Component');
    this.text = 'Hello World';
  }

}
