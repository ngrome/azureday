import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { DashComponent } from './dash.component';
import { DashRoutingModule } from './dash-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [DashComponent, LoginComponent, LogoutComponent],
  imports: [SharedModule, DashRoutingModule],
  exports: [DashComponent, LoginComponent, LogoutComponent],
})
export class DashModule {}
