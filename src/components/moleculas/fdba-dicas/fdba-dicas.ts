import { Component, EventEmitter } from "@angular/core";
import { Desafio } from "../../../models/desafio.model";
import { popsUp } from "../../../animations/animation.animation";

@Component({
  selector: "fdba-dicas",
  templateUrl: "fdba-dicas.html",
  inputs: [
    "firstDica",
    "desafio",
    "buttonText",
    "buttonTextActive",
    "pontosDica",
    "dicasSolicitadas",
    "type"
  ],
  outputs: ["clickButtonDica"],
  animations: [popsUp]
})
export class FdbaDicasComponent {
  desafio: Desafio;
  firstDica: string;
  dicasSolicitadas: string[];
  buttonText: string;
  buttonTextActive: string;
  pontosDica: number;
  type: string;

  clickButtonDica = new EventEmitter();
  constructor() {}
  ngOnInit() {
    console.log(this.desafio.dicas);
  }

  clickButtonDicaEmit(click) {
    this.clickButtonDica.next(click);
  }

  newDica() {
    console.log("nova dica !");
  }
}
