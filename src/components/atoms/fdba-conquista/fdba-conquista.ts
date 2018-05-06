import { Component, Input } from '@angular/core';

@Component({
  selector: 'fdba-conquista',
  templateUrl: 'fdba-conquista.html',
  inputs: ['imagem', 'titulo', 'descricao']
})
export class FdbaConquistaComponent {

  imagem: string;
  titulo: string;
  descricao: string;
  constructor() {
    console.log('Hello FdbaConquistaComponent Component');

  }

}
