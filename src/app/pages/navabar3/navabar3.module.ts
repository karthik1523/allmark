import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Navabar3RoutingModule } from './navabar3-routing.module';
import { Navabar3Component } from './navabar3.component';


@NgModule({
  declarations: [
    Navabar3Component
  ],
  imports: [
    CommonModule,
    Navabar3RoutingModule
  ]
})
export class Navabar3Module { }
