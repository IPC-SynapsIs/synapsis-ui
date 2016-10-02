import { Route } from '@angular/router';
import {ProjectComponent} from "./project.component";

export const ProjectRoutes: Route[] = [
  {
    path: 'projects/:projectId',
    component: ProjectComponent
  }
];
