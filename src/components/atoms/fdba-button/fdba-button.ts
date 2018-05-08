import { Component, EventEmitter } from '@angular/core';
import { dicaAnimation, dicaTextAnimation } from '../../../animations/animation.animation';

@Component({
  selector: 'fdba-button',
  templateUrl: 'fdba-button.html',
  outputs: ['clickButton'],
  inputs: ['buttonText', 'type', 'cor', 'altura', 'resume', 'buttonTextActive', 'pontosDica', 'disabledProp'],
  animations: [dicaAnimation, dicaTextAnimation]
})
export class FdbaButtonComponent {

  resume: string;
  buttonText: string;
  type: string;
  altura: string;
  cor: string;
  buttonTextActive: string;
  pontosDica: number;
  clickButtonDica: boolean = false;
  disabledProp: boolean = false;

  clickButton = new EventEmitter();

  botaoDicaAnim = 'invisible'
  botaoTextDicaAnim = 'invisible'

  constructor() {
  }

  clickButtonEmit(click): void {
    this.clickButton.next(click);
  }

  dicaAnimate() {
    this.botaoDicaAnim = (this.botaoDicaAnim == 'visible') ? 'invisible' : 'visible';
    this.botaoTextDicaAnim = (this.botaoTextDicaAnim == 'visible') ? 'invisible' : 'visible';

  }

}
