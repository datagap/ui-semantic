import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';

const routes: Routes = [
  {
    path: 'demo',
    children: [{ path: '', component: DemoComponent }],
  },
];

export const demoRoutes: any = RouterModule.forChild(routes);
