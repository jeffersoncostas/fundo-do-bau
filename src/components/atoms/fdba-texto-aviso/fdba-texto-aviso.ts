import { Component } from "@angular/core";

@Component({
  selector: "fdba-texto-aviso",
  templateUrl: "fdba-texto-aviso.html",
  inputs: ["texto"]
})
export class FdbaTextoAvisoComponent {
  texto: string;

  constructor() {}
}
