import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.scss',
})
export class JobsPageComponent {
  experiences = [
    {
      role: 'Desarrollador full stack',
      company: 'Benza Value',
      period: 'Jul 2024 – Presente',
      summary:
        'Desarrollo de nuevas vistas para la plataforma, mantenimiento del código y manejo de servicios. Creación de formularios reactivos para mejorar la experiencia del usuario.',
      tags: ['Angular', 'Express.js', 'JavaScript', 'Reactive Forms'],
    },
    {
      role: 'Desarrollador de WordPress',
      company: 'SUPOVA',
      period: 'Jul 2025 – Presente',
      summary:
        'Desarrollo freelance para la página institucional del Sindicato Unido de Personal de Obras Viales de Mendoza. Implementación de funcionalidades personalizadas y optimización del sitio.',
      tags: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    },
    {
      role: 'Desarrollador de WordPress',
      company: 'ClickToFish',
      period: 'May 2025 – Presente',
      summary:
        'Desarrollo de una plataforma tipo Booking para aficionados a la pesca. Implementación de sistema de reservas, gestión de usuarios y funcionalidades específicas del sector.',
      tags: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
    },
    {
      role: 'Desarrollador de front-end',
      company: 'CAMARCO Mendoza',
      period: 'Sep 2023 – Ago 2024',
      summary:
        'Mantenimiento de la página actual y creación de páginas nuevas. Optimización de la base de datos y mejora de la experiencia del usuario.',
      tags: ['WordPress', 'PHP', 'MySQL', 'Frontend'],
    },
    {
      role: 'Desarrollador full stack',
      company: 'Chokiss',
      period: 'Nov 2023 – May 2024',
      summary:
        'Creación de aplicación móvil para control de ventas, stock y usuarios. Desarrollo de API RESTful, vistas y documentación completa del sistema.',
      tags: ['Java', 'Angular', 'Mobile', 'REST API'],
    },
    {
      role: 'Desarrollador de front-end',
      company: 'AmCham Argentina',
      period: 'Jul 2023 – Ene 2024',
      summary:
        'Desarrollo de componentes React y optimización de interfaces web. Participación activa en metodologías ágiles (SCRUM), dailys diarios y retrospectivas. Colaboración directa con RRHH para alineación de objetivos técnicos con necesidades del negocio. Gestión de sprints y estimaciones de story points.',
      tags: ['React.js', 'SCRUM', 'Metodologías Ágiles', 'Gestión de Proyectos'],
    },
    {
      role: 'Desarrollador de back-end',
      company: 'Vodafone',
      period: 'Feb 2023 – Jul 2023',
      summary:
        'Implementación y mantenimiento de APIs utilizando Java Spring Boot, con documentación generada usando Swagger. Desarrollo de interfaces de usuario con React y Next.js. Testing de endpoints y pruebas de variables con SOAP UI. Despliegues utilizando contenedores Docker. Implementación de metodologías ágiles SCRUM con dailys, planning sessions y retrospectivas. Colaboración cross-funcional con equipos de producto y RRHH.',
      tags: ['Java', 'Spring Boot', 'React', 'Next.js', 'Docker', 'Swagger', 'SOAP UI'],
    },
  ];
}
