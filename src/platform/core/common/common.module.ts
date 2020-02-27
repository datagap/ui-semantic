import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Directives
 */
import { UiAutoTrimDirective } from './forms/auto-trim/auto-trim.directive';
import { UiFullscreenDirective } from './directives/fullscreen/fullscreen.directive';

const UI_DIRECTIVES: Type<any>[] = [UiAutoTrimDirective, UiFullscreenDirective];

// Validators
const UI_VALIDATORS: Type<any>[] = [];

/**
 * PIPES
 */
import { UiTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { UiTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
import { UiTimeUntilPipe } from './pipes/time-until/time-until.pipe';
import { UiBytesPipe } from './pipes/bytes/bytes.pipe';
import { UiDecimalBytesPipe } from './pipes/decimal-bytes/decimal-bytes.pipe';
import { UiDigitsPipe } from './pipes/digits/digits.pipe';
import { UiTruncatePipe } from './pipes/truncate/truncate.pipe';

const UI_PIPES: Type<any>[] = [
  UiTimeAgoPipe,
  UiTimeDifferencePipe,
  UiTimeUntilPipe,
  UiBytesPipe,
  UiDecimalBytesPipe,
  UiDigitsPipe,
  UiTruncatePipe,
];

/**
 * Services
 */

import { RouterPathService } from './services/router-path.service';
import { IconService } from './services/icon.service';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [UI_DIRECTIVES, UI_PIPES, UI_VALIDATORS],
  exports: [FormsModule, CommonModule, UI_DIRECTIVES, UI_PIPES, UI_VALIDATORS],
  providers: [RouterPathService, IconService],
})
export class UiCommonModule {}
