import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './material-design.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialDesignModule],
  exports: [MaterialDesignModule, RouterModule],
})
export class SharedModule {}
