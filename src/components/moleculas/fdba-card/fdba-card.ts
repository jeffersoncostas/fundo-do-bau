import { Component, EventEmitter } from '@angular/core';
import { Desafio } from '../../../models/desafio.model';

@Component({
  selector: 'fdba-card',
  templateUrl: 'fdba-card.html',
  inputs: ['listaDesafios', 'botaoCardVerde', 'botaoCardVermelho'],
  outputs: ['clickCard', 'clickButtonAchei', 'clickButtonDesisto']
})
export class FdbaCardComponent {
  clickCard = new EventEmitter();
  clickButtonAchei = new EventEmitter();
  clickButtonDesisto = new EventEmitter();
  listaDesafios: Desafio[]
  botaoCardVerde: string;
  botaoCardVermelho: string;

  constructor() {

  }

  clickCardEmit(click) {
    this.clickCard.next(click);

  }

  teAchei(desafio: Desafio) {
    console.log(desafio)
    this.clickButtonAchei.next(desafio);
  }

  desisto(desafio: Desafio) {
    this.clickButtonDesisto.next(desafio);
  }
}
