import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { DashComponent } from './features/dash/dash.component';
import { LoginComponent } from './features/login/login.component';
import { LogoutComponent } from './features/logout/logout.component';
import { AuthCallbackComponent } from './core/auth-callback/auth-callback.component';
import { AdalGuard } from 'adal-angular4';

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
    component: DashComponent,
    canActivate: [AdalGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
