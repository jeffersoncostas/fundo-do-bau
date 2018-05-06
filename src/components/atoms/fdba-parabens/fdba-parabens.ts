import { Component } from '@angular/core';

/**
 * Generated class for the FdbaParabensComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fdba-parabens',
  templateUrl: 'fdba-parabens.html',
  inputs: ['titulo', 'descricao']
})
export class FdbaParabensComponent {

 titulo: string;
 descricao: string;

  constructor() {
  }

}
