import { Component } from '@angular/core';


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
