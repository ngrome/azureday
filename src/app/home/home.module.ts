import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { DashModule } from '../dash/dash.module';
import { BlogModule } from '../blog/blog.module';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [SharedModule, DashModule, BlogModule],
  exports: [HomeComponent, AboutComponent],
})
export class HomeModule {}
