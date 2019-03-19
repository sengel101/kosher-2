import { Injectable } from '@angular/core';
import {Restaurant} from '../restaurant';
import {Observable, of} from 'rxjs';
import {Address} from '../address';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Restaurant[];
  constructor() {
    // TODO: replace with API call
    this.restaurants = [
      new Restaurant({
        name: 'volvy\'s Kitchen',
        phone: '(514) 514-3256',
        website: 'www.seldat.ca',
        rating: 5,
        averageMealPrice: 500,
        location: new Address({
          streetNumber: 5433,
          apartment: 'a',
          streetName: 'Jeanne Mance',
          city: 'Montreal',
          province: 'Qc',
          postalCode: 'H2V 4K5',
          country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'Pizza Pita',
        phone: '(514) 731-7482',
        website: 'https://www.Pizzapita.com',
        rating: 4.5,
        averageMealPrice: 55,
        location: new Address({
          streetNumber: 6415,
          apartment: '',
          streetName: 'Decarie Blvd',
          city: 'Montreal',
          province: 'Qc',
          postalCode: 'H3W 3E1',
          country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'Luzzatto',
        phone: '(514) 739-8535',
        website: 'http://luzzattorestaurant.com/',
        rating: 3,
        averageMealPrice: 78,
        location: new Address({
          streetNumber: 6445 ,
          streetName: 'Decarie Blvd',
          city: 'Montreal',
          province: 'Qc',
          postalCode: 'H3W 3E1',
          country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'Cafe Tav',
        phone: '(514) 731-8101',
        website: 'http://cafetav.com/',
        rating: 5,
        averageMealPrice: 33
      }),
      new Restaurant({
        name: 'Tasty Food',
        phone: '(514) 739-9333',
        rating: 4.1,
        averageMealPrice: 33,
        location: new Address({
          streetNumber: 6660  ,
          streetName: 'Decarie Blvd',
          city: 'Montreal',
          province: 'Qc',
          postalCode: 'H3X 2K4',
          country: 'Canada'
        })
      })
    ];
  }

  // region Getters
  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants)
}
  // endregion
}
