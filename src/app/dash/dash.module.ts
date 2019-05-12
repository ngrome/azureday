import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { DashComponent } from './dash.component';
import { DashRoutingModule } from './dash-routing.module';

@NgModule({
  declarations: [DashComponent],
  imports: [SharedModule, DashRoutingModule],
  exports: [DashComponent],
})
export class DashModule {}
