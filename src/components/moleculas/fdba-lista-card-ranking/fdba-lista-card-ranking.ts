import { Component } from '@angular/core';

@Component({
  selector: 'fdba-lista-card-ranking',
  templateUrl: 'fdba-lista-card-ranking.html'
})

export class FdbaListaCardRankingComponent {
 
  listaRanking: {nome:string, pontos:number} [];

  constructor() {
  }

}
