import { Component, EventEmitter } from "@angular/core";

import { quizAlternativa } from "../../../animations/animation.animation";

@Component({
  selector: "fdba-quiz",
  templateUrl: "fdba-quiz.html",
  inputs: ["paginacao", "pergunta", "resposta", "alternativa"],
  outputs: ["clickButtonQuiz"],
  animations: [quizAlternativa]
})
export class FdbaQuizComponent {
  paginacao: number;
  pergunta: string;
  resposta: string;
  alternativa: string[];
  clickButtonQuiz = new EventEmitter();

  singleArray = [];
  text = ["amore", "docura", "caralhao", "bucetao"];
  cores = ["#3DD689", "#FFC350", "#E97C29", "#FF2D2D"];

  constructor() {}
  ngOnInit() {}
  ngOnChanges() {
    this.singleArray = [];
    this.singleArrayF();
  }

  singleArrayF() {
    this.shuffle(this.cores);
    this.shuffle(this.alternativa);
    for (var _i = 0; _i < this.cores.length; _i++) {
      this.singleArray.push({
        cores: this.cores[_i],
        text: this.alternativa[_i]
      });
    }
  }

  shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }
  clickButtonQuizEmit(click) {
    this.clickButtonQuiz.next(click);
  }
}
