import { Component, EventEmitter } from "@angular/core";

@Component({
  selector: "fdba-quiz",
  templateUrl: "fdba-quiz.html",
  inputs: ["paginacao"],
  outputs: ["clickButtonQuiz"]
})
export class FdbaQuizComponent {
  paginacao: number;
  clickButtonQuiz = new EventEmitter();

  singleArray = [];
  text = ["amore", "docura", "caralhao", "bucetao"];
  cores = ["#3DD689", "#FFC350", "#E97C29", "#FF2D2D"];

  constructor() {
    this.singleArrayF();
  }

  singleArrayF() {
    this.shuffle(this.cores);
    this.shuffle(this.text);
    for (var _i = 0; _i < this.cores.length; _i++) {
      this.singleArray.push({
        cores: this.cores[_i],
        text: this.text[_i]
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
