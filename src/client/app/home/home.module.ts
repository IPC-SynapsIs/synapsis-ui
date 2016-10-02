import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import {ProjectService} from "../../services/project/index";
import ProjectItemComponent from "../project/project-item/project-item.component";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomeComponent, ProjectItemComponent],
  exports: [HomeComponent],
  providers: [ProjectService]
})
export class HomeModule { }
