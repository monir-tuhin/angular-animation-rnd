import {animate, state, style, transition, trigger} from "@angular/animations";

export let fadeAnimExp = trigger('fadeAnim', [
  state('void', style({opacity: 0})),
  transition(':enter', [
    animate(2000)
  ]),
  transition(':leave', [
    // animate(500)
    style({ height: '0' }),
    animate(500, style({ backgroundColor: 'red',  transform: 'translateX(-100%)' }))
  ])
])

export let triggerAnimExp = trigger('easeAnim', [
  state('false', style({opacity:1})),
  state('true', style({opacity:0})),
  transition('* <=> *',[
    animate(500)
  ])
])

