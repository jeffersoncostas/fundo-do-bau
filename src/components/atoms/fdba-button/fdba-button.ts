import { Component, EventEmitter } from '@angular/core';
@Component({
  selector: 'fdba-button',
  templateUrl: 'fdba-button.html',
  outputs: ['clickButton'],
  inputs: ['buttonText', 'type', 'cor', 'altura', 'resume', 'buttonTextActive', 'pontosDica']
})
export class FdbaButtonComponent {

  resume: string;
  buttonText: string;
  type: string;
  altura: string;
  cor: string;
  buttonTextActive: string;
  pontosDica: number;
  clickButtonDica: boolean = false;

  clickButton = new EventEmitter();

  constructor() {
  }

  clickButtonEmit(click): void {
    this.clickButton.next(click);
  }
}
