import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { demoRoutes } from './demo.routes';


@NgModule({
  imports: [CommonModule, FormsModule, demoRoutes],
  exports: [DemoComponent],
  declarations: [DemoComponent],
  providers: [],
})
export class DemoModule {}
