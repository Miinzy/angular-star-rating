import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BindingsConfigFormComponent} from './components/bindings-config-form/bindings-config-form.component';
import {MyEventsComponent} from './components/my-events/my-events.component';
import {MyFormComponent} from './components/my-form-component-minimal/form-test.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {
    path:'bindings',
    component: BindingsConfigFormComponent
  },
  {
    path:'events',
    component: MyEventsComponent
  },
  {
    path:'form',
    component: MyFormComponent
  },
  {
    path:'lazy-comp',
    loadChildren: 'app/config-lazy-feature-module/lazy-module-test.module#LazyModuleModule'
  },
  /*{
    path:'**',
    redirectTo: 'bindings'
  }*/
];

@NgModule(
  {
    imports: [
      RouterModule.forRoot(routes, {enableTracing: true})
    ],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {

}