import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ProjectDetailPageComponent } from './pages/project-detail-page/project-detail-page.component';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations: [
    ProjectPageComponent,
    ProjectDetailPageComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
