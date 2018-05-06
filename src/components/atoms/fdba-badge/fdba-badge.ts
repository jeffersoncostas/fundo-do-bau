import { Component } from '@angular/core';

/**
 * Generated class for the FdbaBadgeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
