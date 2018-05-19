import { Component } from '@angular/core';

/**
 * Generated class for the FdbaPerfilInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fdba-perfil-input',
  templateUrl: 'fdba-perfil-input.html'
})
export class FdbaPerfilInputComponent {

  text: string;

  constructor() {
    console.log('Hello FdbaPerfilInputComponent Component');
    this.text = 'Hello World';
  }

}
