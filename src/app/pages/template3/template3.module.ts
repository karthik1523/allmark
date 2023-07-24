import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Template3RoutingModule } from './template3-routing.module';
import { Template3Component } from './template3.component';


@NgModule({
  declarations: [
    Template3Component
  ],
  imports: [
    CommonModule,
    Template3RoutingModule
  ]
})
export class Template3Module { }
