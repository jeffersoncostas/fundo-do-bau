import { Component, EventEmitter } from '@angular/core';

/**
 * Generated class for the FdbaTextoParabensBotaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fdba-texto-parabens-botao',
  templateUrl: 'fdba-texto-parabens-botao.html',
  inputs: ['type', 'texto', 'pontos', 'textoPonto', 'buttonText', 'buttonTextLeft', 'buttonTextRight'],
  outputs: ['clickButtonLeft', 'clickButtonRight', 'clickButton']
})
export class FdbaTextoParabensBotaoComponent {

  type: string;
  texto: string;
  pontos: number;
  textoPonto: string;
  buttonTextLeft: string;
  buttonTextRight: string;
  buttonText: string;

  clickButtonLeft = new EventEmitter();
  clickButtonRight = new EventEmitter();
  clickButton = new EventEmitter();

  constructor() {
  }

  clickButtonLeftEmit(click) {
    this.clickButtonLeft.next(click);
  }
  clickButtonRightEmit(click) {
    this.clickButtonRight.next(click);
  }
  clickButtonEmit(click) {
    this.clickButton.next(click);
  }

}
