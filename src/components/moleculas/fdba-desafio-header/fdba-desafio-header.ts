import { Component } from '@angular/core';
import { Desafio } from '../../../models/desafio.model';

@Component({
  selector: 'fdba-desafio-header',
  templateUrl: 'fdba-desafio-header.html',
  inputs: ['desafio']
})
export class FdbaDesafioHeaderComponent {

  text: string;
  desafio: Desafio;

  constructor() {
  }

  ngOnInit(){
    console.log(this.desafio);
    
  }
}
