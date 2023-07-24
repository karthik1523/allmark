import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationEffectRoutingModule } from './animation-effect-routing.module';
import { AnimationEffectComponent } from './animation-effect.component';


@NgModule({
  declarations: [
    AnimationEffectComponent
  ],
  imports: [
    CommonModule,
    AnimationEffectRoutingModule
  ]
})
export class AnimationEffectModule { }
