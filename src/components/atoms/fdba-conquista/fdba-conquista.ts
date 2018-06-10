import { Component } from "@angular/core";
import { badgePontos } from "../../../animations/animation.animation";

@Component({
  selector: "fdba-conquista",
  templateUrl: "fdba-conquista.html",
  inputs: [
    "imagem",
    "titulo",
    "descricao",
    "background",
    "pontos",
    "bonus",
    "brilho"
  ],
  animations: [badgePontos]
})
export class FdbaConquistaComponent {
  imagem: string;
  titulo: string;
  descricao: string;
  background: string;
  pontos: number;
  bonus: number;
  brilho: boolean;
  constructor() {
    console.log("Hello FdbaConquistaComponent Component");
  }
}
