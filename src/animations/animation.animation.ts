import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  keyframes,
  stagger
} from "@angular/animations";

export const dicaAnimation = trigger("buttonDica", [
  state(
    "visible",
    style({
      opacity: 1,
      width: "240px",
      height: "30px"
    })
  ),
  state(
    "invisible",
    style({
      opacity: 0,
      width: 0,
      height: "20px"
    })
  ),
  transition("* => *", animate(".2s"))
]);

export const dicaTextAnimation = trigger("buttonTextDica", [
  state(
    "visible",
    style({
      opacity: 1
    })
  ),
  state(
    "invisible",
    style({
      opacity: 0
    })
  ),
  transition("* => *", animate("0.7s 500ms"))
]);

// prettier-ignore
export const popsUp = trigger('popsUp', [

  transition('* => *', [
    query(':leave', [
      stagger(100, [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ],{optional:true}),

    query(':enter', [
      style({ opacity: 0,
              transform: 'scale(0)'}),
      stagger(100, [
        animate('0.6s ease-in', keyframes([
          style({opacity: 0, transform: 'scale(0)', offset:0}),
          style({opacity: .7, transform: 'scale(1.05)', offset:0.3}),
          style({opacity: 1, transform: 'scale(0.90,1)', offset:0.7}),
          style({opacity: 1, transform: 'scale(1)', offset:1}),

        ])
        )
      ])
    ],{optional:true})
  ])
]);

// prettier-ignore
export const slideUp = trigger("slideUp", [

transition('*=>*',[

    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(50px)'
      }),
      stagger(100, [
        animate('0.6s ease-in', keyframes([
          style({ opacity: 0, transform: 'translateY(50px)', offset: 0 }),
          style({ opacity: .7, transform: 'translateY(-50px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateY(15px)', offset: 0.7 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),

        ])
        )
      ])
    ], { optional: true })


])

]);
