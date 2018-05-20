import { Component, EventEmitter } from "@angular/core";

@Component({
  selector: "fdba-toogle",
  templateUrl: "fdba-toogle.html",
  inputs: ["toogle"],
  outputs: ["configToogle"]
})
export class FdbaToogleComponent {
  toogle: string;

  configToogle = new EventEmitter();
  constructor() {}
}
