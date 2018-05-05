import { Component, ViewChild, EventEmitter } from '@angular/core';
import { Slides } from 'ionic-angular';
import { SlidesModel } from './slides-model.model';

@Component({
  selector: 'fdba-slider',
  templateUrl: 'fdba-slider.html',
  inputs: ['buttonWhiteText', 'buttonDarkText', 'buttonWhiteEndText', 'buttonDarkEndText', 'listaSlides'],
  outputs: ['clickButtonWhite', 'clickButtonDark']
})
export class FdbaSliderComponent {

  @ViewChild(Slides) slides: Slides;

  endSlide: boolean;
  buttonWhiteText: string;
  buttonDarkText: string;
  buttonWhiteEndText: string;
  buttonDarkEndText: string;
  listaSlides: SlidesModel[];

  clickButtonWhite = new EventEmitter();
  clickButtonDark = new EventEmitter();
  constructor() {
  }

  prevSlide(): void {
    this.slides.slidePrev(500);
  }
  nextSlide() {
    this.slides.slideNext(500);
    this.verificarFim();
  }

  verificarFim() {
    if (this.slides.isEnd) {
      this.endSlide = !this.endSlide;
      console.log(this.endSlide);
      this.slides.pager = false;
      setTimeout(() => {
        this.slides.lockSwipes(true);
      }, 400);
    }
  }

  clickButtonWhiteEmit(click) {
    this.clickButtonWhite.next(click);
  }
  clickButtonDarkEmit(click) {
    this.clickButtonDark.next(click);
  }

}
