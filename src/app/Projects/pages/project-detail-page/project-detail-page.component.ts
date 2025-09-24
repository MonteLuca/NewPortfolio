import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../../services/project.service';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project-detail-page',
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.scss',
})
export class ProjectDetailPageComponent {
  p?: Project;

  constructor(
    ar: ActivatedRoute,
    svc: ProjectsService,
    private router: Router
  ) {
    const slug = ar.snapshot.paramMap.get('slug')!;
    this.p = svc.bySlug(slug);
    if (!this.p) this.router.navigate(['/projects']);
  }
}
