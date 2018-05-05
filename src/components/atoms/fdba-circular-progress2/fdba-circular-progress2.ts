import { Component } from '@angular/core';

/**
 * Generated class for the FdbaCircularProgress2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fdba-circular-progress2',
  templateUrl: 'fdba-circular-progress2.html',
  inputs: ['raio', 'cor', 'current']
})
export class FdbaCircularProgress2Component {

  raio: number;
  cor: string;
  current: number;

  constructor() {

    console.log(this.raio, this.cor, this.current)
  }

}
