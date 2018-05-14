import { Component } from '@angular/core';

@Component({
  selector: 'fdba-desafio-info',
  templateUrl: 'fdba-desafio-info.html',
  inputs: ['dificuldade','pontos','completaram']
})
export class FdbaDesafioInfoComponent {

  text: string;
  dificuldade: number;
  pontos: number;
  completaram: number;

  constructor() {

  }

}
