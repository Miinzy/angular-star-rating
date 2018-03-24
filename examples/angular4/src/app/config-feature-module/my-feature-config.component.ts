import {Component} from '@angular/core';
import {StarRatingConfigService} from 'angular-star-rating';

@Component({
  selector: 'my-feature-config-component',
  template: `
    <h2>Configure star rating config with provider override:</h2>
    <button class="btn btn-outline-secondary" (click)="setSize()">
      change size in service
    </button>
    <star-rating-comp [rating]="1"></star-rating-comp>
    <star-rating-comp [rating]="4"></star-rating-comp>
    <my-local-config-component></my-local-config-component>
  `
})
export class MyFeatureConfigComponent {

  constructor(private sRCS: StarRatingConfigService) {

  }

  setSize() {
    this.sRCS.size = !this.sRCS.size ? 'small' : null;
  }

}