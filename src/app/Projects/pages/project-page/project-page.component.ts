import { Component } from '@angular/core';
import { ProjectsService } from '../../services/project.service';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  projects: Project[] = this.svc.all();

  constructor(private svc: ProjectsService) {}

  visibleStack(p: { stack: string[] }) {
    return p.stack?.slice(0, 3) ?? [];
  }

  extraCount(p: { stack: string[] }) {
    return Math.max(0, (p.stack?.length ?? 0) - 3);
  }
}
