import { Component, OnInit } from '@angular/core';
import {Project, ProjectService} from "../../services/project/index";
import {Observable} from "rxjs";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  projects: Observable<Project[]> ;
  errorMessage: string;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {ProjectService} projectService - The injected ProjectService.
   */
  constructor(public projectService: ProjectService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getProjects();
    this.projectService.searchEvent
        .subscribe(
            (params: string) => this.projects = this.projectService.search(params),
            (err: any) =>  console.log("Can't get Projects. Error code: %s, URL: %s "),
            () => console.log('DONE')
        );
  }

  /**
   * Handle the projectService observable
   */
  getProjects() {
    this.projects = this.projectService.get();
  }

}
