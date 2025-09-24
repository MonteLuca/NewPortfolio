import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { PROJECTS } from '../data/projects.data';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  all(): Project[] { return PROJECTS; }
  bySlug(slug: string): Project | undefined {
    return PROJECTS.find(p => p.slug === slug);
  }
}
