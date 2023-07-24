import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar4Component } from './navbar4.component';

const routes: Routes = [{ path: '', component: Navbar4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Navbar4RoutingModule { }
