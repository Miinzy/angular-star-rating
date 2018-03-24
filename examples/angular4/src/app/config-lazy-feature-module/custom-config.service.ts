import { Injectable } from '@angular/core';
import {StarRatingConfigService} from 'angular-star-rating';

@Injectable()
export class CustomLazyConfigService extends StarRatingConfigService {
  numOfStars = 9;
}
