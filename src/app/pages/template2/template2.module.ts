import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Template2RoutingModule } from './template2-routing.module';
import { Template2Component } from './template2.component';


@NgModule({
  declarations: [
    Template2Component
  ],
  imports: [
    CommonModule,
    Template2RoutingModule
  ]
})
export class Template2Module { }
