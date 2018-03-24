import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {StarRatingModule} from 'angular-star-rating';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {BindingsConfigFormComponent} from './components/bindings-config-form/bindings-config-form.component';
import {FormTestComponent} from './components/form-test/form-test.component';
import {MyEventsComponent} from './components/my-events/my-events.component';
import {MyFormComponent} from './components/my-form-component-minimal/form-test.component';
import {ConfigFeatureModule} from './config-feature-module/config-feature.module';

@NgModule({
  declarations: [
    AppComponent,
    //
    FormTestComponent,
    MyFormComponent,
    MyEventsComponent,
    BindingsConfigFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    ConfigFeatureModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
