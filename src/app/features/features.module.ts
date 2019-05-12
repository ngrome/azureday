import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashComponent } from './dash/dash.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BlogpostComponent } from './blogpost/blogpost.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, DashComponent, LoginComponent, LogoutComponent, BlogpostComponent],
  imports: [SharedModule],
  exports: [HomeComponent, AboutComponent, DashComponent],
})
export class FeaturesModule {}
