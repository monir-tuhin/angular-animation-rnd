import { Component } from '@angular/core';
import {triggerAnimExp} from "./animations";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [triggerAnimExp]
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
