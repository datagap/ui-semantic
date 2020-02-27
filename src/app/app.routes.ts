import { Routes, RouterModule } from '@angular/router';

import { SelectivePreloadingStrategyService } from './services';

const routes: Routes = [
  {
    path: '',
    data: { preload: false },
    loadChildren: () =>
      /* tslint:disable-next-line */
      import('./demo/demo.module').then((m) => m.DemoModule),
  },
];

export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
  preloadingStrategy: SelectivePreloadingStrategyService,
  scrollPositionRestoration: 'enabled',
  relativeLinkResolution: 'corrected',
  anchorScrolling: 'enabled',
});
