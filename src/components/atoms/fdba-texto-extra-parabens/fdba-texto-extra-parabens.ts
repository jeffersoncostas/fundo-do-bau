import { Component } from '@angular/core';

/**
 * Generated class for the FdbaTextoExtraParabensComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fdba-texto-extra-parabens',
  templateUrl: 'fdba-texto-extra-parabens.html',
  inputs: ['type', 'pontos', 'texto']
})
export class FdbaTextoExtraParabensComponent {

  type: string;
  pontos: number;
  texto: string;

  constructor() {
  }

}
