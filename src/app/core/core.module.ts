import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

@NgModule({
  declarations: [AuthCallbackComponent],
  imports: [SharedModule],
  exports: [],
})
export class CoreModule {}
