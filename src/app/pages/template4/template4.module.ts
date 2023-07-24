import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Template4RoutingModule } from './template4-routing.module';
import { Template4Component } from './template4.component';


@NgModule({
  declarations: [
    Template4Component
  ],
  imports: [
    CommonModule,
    Template4RoutingModule
  ]
})
export class Template4Module { }
