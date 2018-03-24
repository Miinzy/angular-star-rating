import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StarRatingConfigService, StarRatingModule} from 'angular-star-rating';
import {LazyComponentTestComponent} from './lazy-component-test.component';
import {CustomLazyConfigService} from './custom-config.service';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LazyComponentTestComponent
    }]),
    StarRatingModule
  ],
  declarations: [LazyComponentTestComponent],
  providers:[
    {
      provide:StarRatingConfigService,
      useClass: CustomLazyConfigService
    }
  ]
})
export class LazyModuleModule { }
