import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsValidationFormComponent } from './js-validation-form/js-validation-form.component';

const routes: Routes = [
  {path:'eptask',component:JsValidationFormComponent},
  {path:'',component:JsValidationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
