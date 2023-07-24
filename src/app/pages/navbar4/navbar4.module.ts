import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Navbar4RoutingModule } from './navbar4-routing.module';
import { Navbar4Component } from './navbar4.component';


@NgModule({
  declarations: [
    Navbar4Component
  ],
  imports: [
    CommonModule,
    Navbar4RoutingModule
  ]
})
export class Navbar4Module { }
