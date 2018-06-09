import { Component } from "@angular/core";
import { popsUp } from "../../../animations/animation.animation";

@Component({
  selector: "fdba-lista-card-ranking",
  templateUrl: "fdba-lista-card-ranking.html",
  inputs: ["listaUsers"],
  animations: [popsUp]
})
export class FdbaListaCardRankingComponent {
  listaUsers: { userName: string; nome: string; pontos: number }[];

  constructor() {}
}
