import { Injectable } from '@angular/core';
import {StarRatingConfigService} from 'angular-star-rating';

@Injectable()
export class CustomLocalConfigService extends StarRatingConfigService {
  numOfStars = 7;
}
