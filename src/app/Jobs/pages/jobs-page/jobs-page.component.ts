import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.scss',
})
export class JobsPageComponent {
  experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2020 – Present',
      summary:
        'Desarrollo y mantenimiento de aplicaciones web con Angular/React, Node.js y PostgreSQL. Integración con APIs de terceros y optimización de performance.',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'REST APIs'],
    },
    {
      role: 'Software Engineer',
      company: 'Innovate Systems LLC',
      period: 'Jun 2018 – Dec 2019',
      summary:
        'Nuevas features para plataformas existentes usando Angular y Java/Spring. Unit tests, code reviews y colaboración con equipos cross-functional.',
      tags: ['Angular', 'Java', 'Microservices', 'Testing'],
    },
    {
      role: 'Junior Developer',
      company: 'CodeCrafters Ltd.',
      period: 'Jul 2017 – May 2018',
      summary:
        'Soporte a desarrollos web en HTML/CSS/JS. Corrección de bugs y mejoras menores. Participación en prácticas ágiles y control de versiones.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Agile'],
    },
  ];
}
