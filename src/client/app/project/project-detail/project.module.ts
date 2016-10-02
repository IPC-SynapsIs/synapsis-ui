import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProjectComponent } from './project.component';
import {ProjectService} from "../../../services/project/index";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ProjectComponent],
  exports: [ProjectComponent],
  providers: [ProjectService]
})
export class ProjectModule { }
