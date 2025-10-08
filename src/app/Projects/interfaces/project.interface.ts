export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  cover: string;
  gallery?: string[]; // Array de imágenes adicionales para el carrusel
  overview: string;
  stack: string[];
  challenges?: string;
  results?: string;
  demoUrl?: string;
  repoUrl?: string;
}
