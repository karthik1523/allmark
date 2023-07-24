import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'new', loadChildren: () => import('./pages/new/new.module').then(m => m.NewModule) },
 { path: 'template2', loadChildren: () => import('./pages/template2/template2.module').then(m => m.Template2Module) }, 
 { path: 'template3', loadChildren: () => import('./pages/template3/template3.module').then(m => m.Template3Module) },
 { path: 'template4', loadChildren: () => import('./pages/template4/template4.module').then(m => m.Template4Module) },
 { path: 'navbar', loadChildren: () => import('./pages/navbar/navbar.module').then(m => m.NavbarModule) },
 { path: 'navbar2', loadChildren: () => import('./pages/navbar2/navbar2.module').then(m => m.Navbar2Module) },
 { path: 'navbar3', loadChildren: () => import('./pages/navabar3/navabar3.module').then(m => m.Navabar3Module) },
 { path: 'navbar4', loadChildren: () => import('./pages/navbar4/navbar4.module').then(m => m.Navbar4Module) },
 { path: 'login5', loadChildren: () => import('./pages/login5/login5.module').then(m => m.Login5Module) },
 { path: 'animation-effect', loadChildren: () => import('./pages/animation-effect/animation-effect.module').then(m => m.AnimationEffectModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
