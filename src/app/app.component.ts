import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('userTrigger', [
      state('false', style({opacity:1})),
      state('true', style({opacity:0})),
      transition('* <=> *',[
        animate(500)
      ])
      // transition('visible', [
      //   style({backgroundColor: 'yellow', opacity: 0}),
      //   animate(2000)
      // ])
    ])
  ]
})
export class AppComponent {
  title = 'Angular Animation';
  state = false;
  animateTest: string | undefined;

  doAnimate() {
    this.animateTest = 'Animate Me';
    this.state = !this.state;
  }


}
