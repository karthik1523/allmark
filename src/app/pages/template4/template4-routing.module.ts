import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Template4Component } from './template4.component';

const routes: Routes = [{ path: '', component: Template4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Template4RoutingModule { }
