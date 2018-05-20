import { Component, EventEmitter } from "@angular/core";

@Component({
  selector: "fdba-home-header",
  templateUrl: "fdba-home-header.html",
  inputs: ["toogleFixed", "toogle"],
  outputs: ["configToogle"]
})
export class FdbaHomeHeaderComponent {
  toogleFixed: boolean;
  toogle: string;

  configToogle = new EventEmitter();
  constructor() {}

  ngOnChanges() {}
}
