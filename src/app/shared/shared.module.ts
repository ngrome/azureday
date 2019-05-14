import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './material-design.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, HttpClientModule, MaterialDesignModule, ReactiveFormsModule],
  exports: [CommonModule, MaterialDesignModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
