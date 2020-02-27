import { NgModule, ModuleWithProviders, Type, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { UiShellComponent } from './shell/shell.component';

export const UI_BOOTSTRAP: Type<any>[] = [
  UiShellComponent,
];

@NgModule({
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [UI_BOOTSTRAP],
  declarations: [UI_BOOTSTRAP],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [UiShellComponent],
})
export class UiBootstrapModule {
  constructor(@Optional() @SkipSelf() parentModule: UiBootstrapModule) {
    if (parentModule) {
      throw new Error('UiBootstrapModule is already loaded. Import it in the AppModule only!');
    }
  }

  static forRoot(config): ModuleWithProviders {
    return {
      ngModule: UiBootstrapModule,
      providers: [],
    };
  }
}
