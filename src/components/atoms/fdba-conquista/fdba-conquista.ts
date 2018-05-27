import { Component } from "@angular/core";

@Component({
  selector: "fdba-conquista",
  templateUrl: "fdba-conquista.html",
  inputs: ["imagem", "titulo", "descricao", "background", "pontos","bonus","brilho"]
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
