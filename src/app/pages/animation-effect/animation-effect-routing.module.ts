import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationEffectComponent } from './animation-effect.component';

const routes: Routes = [{ path: '', component: AnimationEffectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationEffectRoutingModule { }
