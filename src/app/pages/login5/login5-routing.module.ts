import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login5Component } from './login5.component';

const routes: Routes = [{ path: '', component: Login5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Login5RoutingModule { }
