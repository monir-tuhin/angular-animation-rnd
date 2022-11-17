import { Component, OnInit } from '@angular/core';
import {fadeAnimExp} from "../../animations";

@Component({
  selector: 'app-animate-one',
  templateUrl: './animate-one.component.html',
  styleUrls: ['./animate-one.component.scss'],
  animations: [fadeAnimExp]
})
export class AnimateOneComponent implements OnInit {
  countryList: any[] = [];
  countryName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addCountry() {
    this.countryList.push(this.countryName);
    this.countryName = '';
  }

  deleteCountry(i: number) {
    this.countryList.splice(i, 1);
  }

}
