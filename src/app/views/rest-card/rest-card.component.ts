import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../models/restaurant';

@Component({
  selector: 'app-rest-card',
  templateUrl: './rest-card.component.html',
  styleUrls: ['./rest-card.component.scss']
})
export class RestCardComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor() {
    // this.restaurant = new Restaurant();
  }

  ngOnInit() {
    // this.restaurant.name = 'Tav Cafe';
    // this.restaurant.phone = '(514) 112-3581';
    // this.restaurant.rating = 3;
    // this.restaurant.priceRange = 3;
    // this.restaurant.website = 'http://cafetav.com/';
  }

}
