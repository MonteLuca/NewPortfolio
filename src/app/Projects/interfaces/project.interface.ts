export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  cover: string;
  overview: string;
  stack: string[];
  challenges?: string;
  results?: string;
  demoUrl?: string;
  repoUrl?: string;
}
