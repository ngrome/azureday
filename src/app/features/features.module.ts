import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BlogpostComponent } from '../blogpost/blogpost.component';
import { AuthorComponent } from '../author/author.component';
import { DashModule } from '../dash/dash.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    LoginComponent,
    LogoutComponent,
    BlogpostComponent,
    AuthorComponent,
  ],
  imports: [SharedModule, DashModule],
  exports: [HomeComponent, AboutComponent],
})
export class FeaturesModule {}
