import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { UiMediaToggleDirective } from './directives/media-toggle.directive';
import { UiMediaService } from './services/media.service';

const UI_MEDIA: Type<any>[] = [UiMediaToggleDirective];

@NgModule({
  declarations: [UI_MEDIA],
  exports: [UI_MEDIA],
  providers: [UiMediaService],
})
export class UiMediaModule {}
