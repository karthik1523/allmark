import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navabar3Component } from './navabar3.component';

const routes: Routes = [{ path: '', component: Navabar3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Navabar3RoutingModule { }
