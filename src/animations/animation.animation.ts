import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const dicaAnimation = trigger('buttonDica', [
  state('visible', style({
    opacity: 1,
    width: '240px',
    height: '30px'
  })),
  state('invisible', style({
    opacity: 0,
    width: 0,
    height: '20px'
  })),
  transition('* => *', animate('.2s'))
])

export const dicaTextAnimation = trigger('buttonTextDica', [
  state('visible', style({
    opacity: 1
  })),
  state('invisible', style({
    opacity: 0
  })),
  transition('* => *', animate('0.7s 500ms'))
])