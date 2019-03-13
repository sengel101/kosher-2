// region Imports
import {Address} from './address';
import {Review} from './review';
// endregion

export class Restaurant {
  name: string;
  website: string;
  phone: string;
  rating: number;
  priceRange: number;
  reviews: Review[];
  location: Address;
}
