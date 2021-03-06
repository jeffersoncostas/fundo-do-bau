import { Component } from "@angular/core";

@Component({
  selector: "fdba-badge",
  templateUrl: "fdba-badge.html",
  inputs: ["badgePoints", "type", "avisoText", "avisoIcon", "avisoCor"]
})
export class FdbaBadgeComponent {
  text: string;
  badgePoints: string;
  type: string;
  avisoText: string;
  avisoIcon: string;
  avisoCor: string;

  constructor() {}
}
