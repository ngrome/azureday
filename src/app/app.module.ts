import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from '@angular/cdk/layout';
import { AdalService, AdalGuard } from 'adal-angular4';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FeaturesModule,

    LayoutModule,
  ],
  providers: [AdalService, AdalGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
