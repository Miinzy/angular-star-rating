import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StarRatingModule} from 'angular-star-rating';
import {MyFeatureConfigComponent} from './my-feature-config.component';
import {MyLocalConfigComponent} from './my-local-config.component';
import {RouterModule} from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'config', component: MyFeatureConfigComponent}
    ]),
    StarRatingModule.forChild(),
  ],
  declarations: [
    MyFeatureConfigComponent,
    MyLocalConfigComponent
  ],
  providers: []
})
export class ConfigFeatureModule { }
