import { Component, OnDestroy } from '@angular/core';
import {Project, ProjectService} from "../../../services/project/index";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'project',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css'],
})

export class ProjectComponent implements OnDestroy {

  project: Project ;
  errorMessage: string;

  private subscription: Subscription;

  /**
   * Creates an instance of the HomeComponent with the injected ProjectService
   *
   * @param {ProjectService} projectService - The injected ProjectService.
   */
    constructor(route: ActivatedRoute, projectService: ProjectService) {

      const projectId = route.snapshot.params['projectId'];

      projectService
          .getProjectById(projectId)
          .subscribe(
              project => {
                this.project = project;
              },
              error => console.error(error));
    }

  ngOnDestroy(): any {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
