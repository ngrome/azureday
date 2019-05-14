import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogAddComponent } from './blog/blog-add/blog-add.component';
import { BlogPostDetailComponent } from './blogpost/blogpost-detail/blogpost-detail.component';

const routes: Routes = [
  {
    path: 'add',
    component: BlogAddComponent,
  },
  {
    path: ':blogPostId',
    component: BlogPostDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BlogRoutingModule {}
