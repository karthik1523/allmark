import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Template3Component } from './template3.component';

const routes: Routes = [{ path: '', component: Template3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Template3RoutingModule { }
