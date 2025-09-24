import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ProjectDetailPageComponent } from './pages/project-detail-page/project-detail-page.component';

const routes: Routes = [
  { path: '', component: ProjectPageComponent },
  { path: ':slug', component: ProjectDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
