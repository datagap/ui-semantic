import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// register 'es' locale
registerLocaleData(localeEs);

import { UiShellComponent, UiBootstrapModule } from 'platform/bootstrap';
import { appRoutes, appRoutingProviders } from './app.routes';
import { SelectivePreloadingStrategyService } from './services';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,

    UiBootstrapModule,

    appRoutes,
  ], // modules needed to run this module
  providers: [appRoutingProviders, SelectivePreloadingStrategyService], // additional providers needed for this module
  bootstrap: [UiShellComponent],
})
export class AppModule {}
