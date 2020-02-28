import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { demoRoutes } from './demo.routes';

import { UiCommonModule } from '@dgx/core/common';
import { UiMediaModule } from '@dgx/core/media';

@NgModule({
  imports: [CommonModule, FormsModule, UiCommonModule, UiMediaModule, demoRoutes],
  exports: [DemoComponent],
  declarations: [DemoComponent],
  providers: [],
})
export class DemoModule {}
