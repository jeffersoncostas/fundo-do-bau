import { Component } from "@angular/core";

@Component({
  selector: "fdba-conquista",
  templateUrl: "fdba-conquista.html",
  inputs: ["imagem", "titulo", "descricao", "background", "pontos","bonus"]
})
export class FdbaConquistaComponent {
  imagem: string;
  titulo: string;
  descricao: string;
  background: string;
  pontos: number;
  bonus: number;
  constructor() {
    console.log("Hello FdbaConquistaComponent Component");
  }
}
