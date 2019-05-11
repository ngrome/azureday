import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, ErrorPagesRoutingModule],
})
export class ErrorPagesModule {}
