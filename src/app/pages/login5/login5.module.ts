import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Login5RoutingModule } from './login5-routing.module';
import { Login5Component } from './login5.component';


@NgModule({
  declarations: [
    Login5Component
  ],
  imports: [
    CommonModule,
    Login5RoutingModule
  ]
})
export class Login5Module { }
