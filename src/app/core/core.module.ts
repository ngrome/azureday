import { NgModule } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [SharedModule],
  exports: [MainMenuComponent],
})
export class CoreModule {}
