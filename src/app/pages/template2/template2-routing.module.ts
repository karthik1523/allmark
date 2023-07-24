import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Template2Component } from './template2.component';

const routes: Routes = [{ path: '', component: Template2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Template2RoutingModule { }
