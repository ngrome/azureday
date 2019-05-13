import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { BlogAddComponent } from './blog/blog-add/blog-add.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostComponent } from './blogpost/blogpost.component';
import { AuthorComponent } from './author/author.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';

@NgModule({
  declarations: [
    BlogAddComponent,
    BlogListComponent,
    BlogPostComponent,
    AuthorComponent],
  imports: [SharedModule, BlogRoutingModule],
  exports: [
    BlogListComponent,
    BlogPostComponent
  ],
})
export class BlogModule {}
