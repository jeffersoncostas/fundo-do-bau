import { Component } from '@angular/core';

@Component({
  selector: 'fdba-parabens',
  templateUrl: 'fdba-parabens.html',
  inputs: ['titulo', 'descricao','imagem','type']
})
export class FdbaParabensComponent {
  titulo: string;
  descricao: string;
  imagem: string;
  type: string;
  linha: string;

  constructor() {
  }

}
