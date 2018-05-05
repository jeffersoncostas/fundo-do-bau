import { Component } from '@angular/core';

/**
 * Generated class for the FdbaDicasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fdba-dicas',
  templateUrl: 'fdba-dicas.html'
})
export class FdbaDicasComponent {

  text: string;

  constructor() {
    console.log('Hello FdbaDicasComponent Component');
    this.text = 'Hello World';
  }

}
