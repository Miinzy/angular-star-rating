import { Injectable } from '@angular/core';
import {StarRatingConfigService} from 'angular-star-rating';

@Injectable()
export class CustomConfigService extends StarRatingConfigService {
  numOfStars = 3;
}
