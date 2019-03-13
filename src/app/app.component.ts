import {Component, OnInit} from '@angular/core';
import {Restaurant} from './models/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rests: Restaurant[];
  constructor(){
    this.rests = [];
    let temp = new Restaurant();
    temp.name = 'Tav Cafe';
    temp.phone = '(514) 112-3581';
    temp.rating = 3;
    temp.priceRange = 3;
    this.rests.push(temp);

    temp = new Restaurant();
    temp.name = 'Tav College';
    temp.phone = '(514) 912-3681';
    temp.rating = 3;
    temp.priceRange = 3;
    this.rests.push(temp);

    temp = new Restaurant();
    temp.name = 'Tav library';
    temp.phone = '(514) 112-3648';
    temp.rating = 3;
    temp.priceRange = 3;
    this.rests.push(temp);
}

}

