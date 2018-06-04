import { Component } from "@angular/core";
import { Desafio } from "../../../models/desafio.model";

@Component({
  selector: "fdba-desafio-header",
  templateUrl: "fdba-desafio-header.html",
  inputs: ["desafio", "badges"]
})
export class FdbaDesafioHeaderComponent {
  desafio: Desafio;
  badges: { nome: string; cor: string; icon: string }[];

  constructor() {}

  ngOnInit() {}
}
