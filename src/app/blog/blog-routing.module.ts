import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogAddComponent } from './blog/blog-add/blog-add.component';

const routes: Routes = [
  {
    path: 'add',
    component: BlogAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BlogRoutingModule {}
