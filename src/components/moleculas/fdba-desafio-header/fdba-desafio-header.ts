import { Component } from "@angular/core";
import { Desafio } from "../../../models/desafio.model";
import { popsUp } from "../../../animations/animation.animation";

@Component({
  selector: "fdba-desafio-header",
  templateUrl: "fdba-desafio-header.html",
  inputs: ["desafio", "badges"],
  animations: [popsUp]
})
export class FdbaDesafioHeaderComponent {
  desafio: Desafio;
  badges: { nome: string; cor: string; icon: string }[];

  constructor() {}

  ngOnInit() {}
}
