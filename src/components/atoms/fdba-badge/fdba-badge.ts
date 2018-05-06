import { Component } from '@angular/core';

@Component({
  selector: 'fdba-badge',
  templateUrl: 'fdba-badge.html',
  inputs: ['badgePoints','type']
})
export class FdbaBadgeComponent {

  text: string;
  badgePoints: string;
  type: string;

  constructor() {

  }

}
