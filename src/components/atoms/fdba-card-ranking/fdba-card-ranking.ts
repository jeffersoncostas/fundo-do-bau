import { Component } from '@angular/core';

@Component({
  selector: 'fdba-card-ranking',
  templateUrl: 'fdba-card-ranking.html',
  inputs: ['userName','type','userNick', 'userPoints', 'userPosition']
})
export class FdbaCardRankingComponent {

  text: string;
  userName: string;
  type: string;
  userNick: string;
  userPoints: number;
  userPosition: number;

  constructor() {

  }

}
