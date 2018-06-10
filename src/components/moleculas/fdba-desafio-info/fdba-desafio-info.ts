import { Component } from "@angular/core";
import { slideUp } from "../../../animations/animation.animation";

@Component({
  selector: "fdba-desafio-info",
  templateUrl: "fdba-desafio-info.html",
  inputs: ["dificuldade", "pontos", "completaram"],
  animations: [slideUp]
})
export class FdbaDesafioInfoComponent {
  text: string;
  dificuldade: number;
  pontos: number;
  completaram: number;

  constructor() {}
}
