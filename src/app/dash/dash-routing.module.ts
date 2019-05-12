import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdalGuard } from 'adal-angular4';
import { DashComponent } from './dash.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
    canActivate: [AdalGuard],
    canActivateChild: [AdalGuard],
  },
  {
    path: 'blog',
    loadChildren: '../blog/blog.module#BlogModule',
    canActivate: [AdalGuard],
    canActivateChild: [AdalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DashRoutingModule {}
