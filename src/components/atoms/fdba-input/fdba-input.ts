import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'fdba-input',
  templateUrl: 'fdba-input.html',
  inputs:['type','textLabel'],
  outputs:['valueEmitter']
})
export class FdbaInputComponent {

  type: string;
  textLabel: string;
  value: string;
  valueEmitter = new EventEmitter()
  
  constructor() {
  this.valueEmitter.next(this.value)
    
  }

}
