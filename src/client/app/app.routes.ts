import { Routes } from '@angular/router';

import { ProjectRoutes } from './project/index';
import { HomeRoutes } from './home/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...ProjectRoutes
];
