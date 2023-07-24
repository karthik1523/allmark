import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Navbar2RoutingModule } from './navbar2-routing.module';
import { Navbar2Component } from './navbar2.component';


@NgModule({
  declarations: [
    Navbar2Component
  ],
  imports: [
    CommonModule,
    Navbar2RoutingModule
  ]
})
export class Navbar2Module { }
