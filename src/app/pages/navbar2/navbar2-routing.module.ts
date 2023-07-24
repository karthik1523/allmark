import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar2Component } from './navbar2.component';

const routes: Routes = [{ path: '', component: Navbar2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Navbar2RoutingModule { }
