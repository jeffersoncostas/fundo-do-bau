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
      stagger(300, [
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
        animate('1s ease-in', keyframes([
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

// prettier-ignore
export const parabensBau = trigger("parabensBau", [
  transition("*=>*", [
    style({
      top: "75%",
      transform: "rotate(25deg) scale(.25)"
    }),
    animate(".9s 1s ease", keyframes([
      style({ top: "75%", transform: "rotate(25deg) scale(.25)", offset: 0 }),
      style({ top: "34%", transform: "rotate(0deg) scale(1)", offset: 1 }),
    ]))
  ])
]);

// prettier-ignore
export const entradaParabens = trigger("entradaParabens",[

  transition("*=>*", [
    style({
      opacity:0,
      transform: "scale(1.1)"
    }),
    animate(".9s ease", keyframes([
      style({ opacity: 0, transform: "scale(1.1)", offset: 0 }),
      style({ opacity: 1, transform: "scale(1)", offset: 1}),
    ]))
  ])

])

// prettier-ignore
export const entradaConquista = trigger("entradaConquista",[

  transition("*=>*", [
    style({
      opacity: 0,
      transform: "scale(1.5) rotate(25deg)"
    }),
    animate(".6s .1s ease", keyframes([
      style({ opacity: 0, transform: "scale(1.5) rotate(25deg)", offset: 0 }),
      style({ opacity: .3, transform: "scale(.90) rotate(25deg)", offset: .3 }),
      style({ opacity: .6, transform: "scale(1.1) rotate(25deg)", offset: .6 }),
      style({ opacity: 1, transform: "scale(1) rotate(0deg)", offset: 1 }),
    ]))
  ])
])

// prettier-ignore
export const badgePontos = trigger("badgePontos",[

  transition("*=>*", [
    style({

      transform: "scale(0) translate(20%,20%)"
    }),
    animate(".6s .7s ease", keyframes([
      style({  transform: "scale(.80) translate(20%,20%)", offset: 0 }),
      style({ transform: "scale(1.2,1) translate(10%,10%)", offset: .5 }),
      style({ transform: "scale(.90,1) translate(5%,10%)", offset: .8 }),
      style({ transform: "scale(1) translate(0,0)", offset: 1 }),
    ]))
  ])

])

// prettier-ignore
export const quizAlternativa = trigger("quizAlternativa",[

  transition('* => *', [

    query(':leave', [style({position: 'absolute', width:"100%"}),

        animate('0.5s', keyframes([
          style({ opacity: 1, transform: 'translate(0,50%)', offset:0 }),
          style({ opacity: 0, transform: 'translate(-100%,50%)', offset: 1 }),
        ]) )

    ], { optional: true }),

    query(':enter', [
      style({
        opacity: 0,
        transform: 'scale(0)'
      }),
      stagger(300, [
        animate('0.6s ease-in', keyframes([
          style({ opacity: 0, transform: 'scale(0)', offset: 0 }),
          style({ opacity: .7, transform: 'scale(1.05)', offset: 0.3 }),
          style({ opacity: 1, transform: 'scale(0.90,1)', offset: 0.7 }),
          style({ opacity: 1, transform: 'scale(1)', offset: 1 }),

        ])
        )
      ])
    ], { optional: true })
  ])

])
