import { Component } from "@angular/core";

@Component({
  selector: "fdba-conquista",
  templateUrl: "fdba-conquista.html",
  inputs: ["imagem", "titulo", "descricao", "background"]
})
export class FdbaConquistaComponent {
  imagem: string;
  titulo: string;
  descricao: string;
  background: string;
  constructor() {}
}
