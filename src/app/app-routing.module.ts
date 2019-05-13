import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './dash/login/login.component';
import { AuthCallbackComponent } from './core/auth-callback/auth-callback.component';
import { LogoutComponent } from './dash/logout/logout.component';

const routes: Routes = [
  {
    path: 'error',
    loadChildren: './error-pages/error-pages.module#ErrorPagesModule',
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  { path: 'auth-callback', component: AuthCallbackComponent },
  {
    path: 'dashboard',
    loadChildren: './dash/dash.module#DashModule',
  },
  { path: '**', pathMatch: 'full', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
