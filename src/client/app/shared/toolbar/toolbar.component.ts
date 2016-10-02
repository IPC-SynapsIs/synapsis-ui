import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../services/project/index";

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  term: string = '';
  projects: any[] = [];
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

  }

  /**
   * Search new Projects
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  searchProjects(): boolean {
    if(this.term != ""){
      this.projectService.searchEvent.emit(this.term);
    }
    return false;
  }
}

