import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { BlogAddComponent } from './blog-add/blog.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [BlogAddComponent],
  imports: [SharedModule, BlogRoutingModule],
  exports: [],
})
export class BlogModule {}
