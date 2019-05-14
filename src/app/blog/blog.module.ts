import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { BlogAddComponent } from './blog/blog-add/blog-add.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostCardComponent } from './blogpost/blogpost-card/blogpost-card.component';
import { AuthorComponent } from './author/author.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogPostDetailComponent } from './blogpost/blogpost-detail/blogpost-detail.component';

@NgModule({
  declarations: [
    BlogAddComponent,
    BlogListComponent,
    BlogPostCardComponent,
    BlogPostDetailComponent,
    AuthorComponent,
  ],
  imports: [SharedModule, BlogRoutingModule],
  exports: [BlogListComponent, BlogPostCardComponent, BlogPostDetailComponent],
})
export class BlogModule {}
