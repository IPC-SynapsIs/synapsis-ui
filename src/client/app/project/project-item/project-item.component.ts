import {Component, Input} from '@angular/core';
import {Project} from '../../../services/project/index';

@Component({
    selector: 'project-item',
    templateUrl: 'app/project/project-item/project-item.component.html',
    styleUrls: ['app/project/project-item/project-item.component.css']
})
export default class ProjectItemComponent {
    @Input() project: Project;
}