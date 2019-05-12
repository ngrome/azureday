import { NgModule } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SharedModule } from '../shared/shared.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

@NgModule({
  declarations: [MainMenuComponent, AuthCallbackComponent],
  imports: [SharedModule],
  exports: [MainMenuComponent],
})
export class CoreModule {}
