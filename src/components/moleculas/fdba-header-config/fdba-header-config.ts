import { Component, EventEmitter } from "@angular/core";

@Component({
  selector: "fdba-header-config",
  templateUrl: "fdba-header-config.html",
  inputs: [
    "firstSegment",
    "secondSegment",
    "nomeUsuario",
    "pontos",
    "configSegment"
  ],
  outputs: ["configSeg"]
})
export class FdbaHeaderConfigComponent {
  firstSegment: string;
  seconSegment: string;
  nomeUsuario: string;
  pontos: number;
  configSegment: string;

  configSeg = new EventEmitter();
  constructor() {}
}
