import { Component, EventEmitter } from '@angular/core';
import { Desafio } from '../../../models/desafio.model';

@Component({
  selector: 'fdba-dicas',
  templateUrl: 'fdba-dicas.html',
  inputs: ['desafio', 'buttonText', 'buttonTextActive', 'pontosDica'],
  outputs: ['clickButtonDica']
})
export class FdbaDicasComponent {
  desafio: Desafio;
  dicas: { descricao: string }[];
  buttonText: string;
  buttonTextActive: string;
  pontosDica: number;

  clickButtonDica = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
    console.log(this.desafio)
    this.dicas = this.desafio.dicas
  }

  clickButtonDicaEmit(click) {
    this.clickButtonDica.next(click);
  }

  newDica() {

  }
}
