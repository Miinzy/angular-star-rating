import {Component} from '@angular/core';
import {StarRatingConfigService} from 'angular-star-rating';
import {CustomLocalConfigService} from './custom-local-config.service';

@Component({
  selector: 'my-local-config-component',
  template: `    
    <h2>Configure star rating config with local provider override</h2>
    <button class="btn btn-outline-secondary" (click)="setSize()">
      change size in service
    </button>
    <star-rating-comp [rating]="2"></star-rating-comp>
    <star-rating-comp  [rating]="6"></star-rating-comp>
  `,
  providers: [
    {
      provide: StarRatingConfigService,
      useClass: CustomLocalConfigService
    }
  ]
})
export class MyLocalConfigComponent {

  constructor(private sRCS: StarRatingConfigService) {

  }

  setSize() {
    this.sRCS.size = !this.sRCS.size ? 'small' : null;
  }
}
