import { Component } from "@angular/core";

@Component({
  selector: "fdba-lista-card-ranking",
  templateUrl: "fdba-lista-card-ranking.html",
  inputs: ["listaUsers"]
})
export class FdbaListaCardRankingComponent {
  listaUsers: { userName: string; nome: string; pontos: number }[];

  constructor() {}
}
