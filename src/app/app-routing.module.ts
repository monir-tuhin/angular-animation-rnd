import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimateOneComponent} from "./testModule/animate-one/animate-one.component";

const routes: Routes = [
  { path: 'animate-one', component: AnimateOneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
