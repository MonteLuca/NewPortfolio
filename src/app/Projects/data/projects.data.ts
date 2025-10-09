import { Project } from "../interfaces/project.interface";

export const PROJECTS: Project[] = [
  {
    slug: 'examenes-app',
    title: 'ExamenesApp',
    subtitle: 'Sistema de Gestión de Exámenes',
    cover: '/assets/imgs/imgsProyects/ExamenesApp - Login.jpg',
    gallery: [
      '/assets/imgs/imgsProyects/ExamenesApp - Login.jpg',
      '/assets/imgs/imgsProyects/ExamenesApp - VistaAdmin.jpg',
      '/assets/imgs/imgsProyects/ExamenesApp - CreadorCuestinarios.jpg',
      '/assets/imgs/imgsProyects/ExamenesApp - InfoExamen.jpg',
      '/assets/imgs/imgsProyects/ExamenesApp - InicioExamen.jpg'
    ],
    overview: 'Aplicación completa para la gestión de exámenes con roles de administrador y estudiante. Permite crear cuestionarios, asignar exámenes y realizar seguimiento de resultados.',
    stack: ['Angular', 'Spring Boot', 'MySQL'], 
    challenges: 'Implementación de roles y permisos, gestión de sesiones de examen, validación de respuestas en tiempo real.',
    results: 'Sistema funcional con autenticación, panel administrativo completo y experiencia de usuario optimizada para exámenes.',
    repoUrl: 'https://github.com/MonteLuca/ExamenesApp'
  },
  {
    slug: 'gifs-app',
    title: 'GifsApp',
    subtitle: 'Buscador de GIFs',
    cover: '/assets/imgs/imgsProyects/GifsApp.jpg',
    gallery: [
      '/assets/imgs/imgsProyects/GifsApp.jpg'
    ],
    overview: 'Aplicación para buscar y visualizar GIFs utilizando APIs externas. Interfaz intuitiva para explorar contenido multimedia.',
    stack: ['Angular', 'JavaScript', 'CSS'],
    challenges: 'Integración con APIs externas, optimización de carga de imágenes, manejo de estados de carga.',
    results: 'Buscador funcional con interfaz responsiva y experiencia de usuario fluida.',
    demoUrl: 'https://gifsapp-lucamonteleone.netlify.app/', 
    repoUrl: 'https://github.com/MonteLuca/Comienzos-Angular-2.0'
  },
  {
    slug: 'paises-app',
    title: 'PaisesApp',
    subtitle: 'Información de Países',
    cover: '/assets/imgs/imgsProyects/PaisesApp.jpg',
    gallery: [
      '/assets/imgs/imgsProyects/PaisesApp.jpg'
    ],
    overview: 'Aplicación educativa que muestra información detallada de diferentes países del mundo. Incluye datos geográficos, demográficos y culturales.',
    stack: ['Angular', 'TypeScript', 'CSS'],
    challenges: 'Integración de datos de múltiples fuentes, visualización de información compleja, optimización de rendimiento.',
    results: 'Plataforma educativa con información completa y navegación intuitiva.',
    demoUrl: 'https://paises-app-luca-monteleone.netlify.app/', 
    repoUrl: 'https://github.com/MonteLuca/Comienzos-Angular-2.0'
  },
  {
    slug: 'pipes-app',
    title: 'PipesApp',
    subtitle: 'Demostración de Pipes de Angular',
    cover: '/assets/imgs/imgsProyects/PipesApp.jpg',
    gallery: [
      '/assets/imgs/imgsProyects/PipesApp.jpg'
    ],
    overview: 'Aplicación demostrativa que muestra el uso y funcionamiento de los pipes de Angular. Incluye ejemplos de pipes nativos y personalizados.',
    stack: ['Angular', 'TypeScript', 'CSS'],
    challenges: 'Implementación de pipes personalizados, demostración de transformaciones de datos, documentación interactiva.',
    results: 'Herramienta educativa completa para entender el funcionamiento de los pipes en Angular.',
    demoUrl: 'https://pipesapp-luca-monteleone.netlify.app/', 
    repoUrl: 'https://github.com/MonteLuca/Comienzos-Angular-2.0'
  },
  {
    slug: 'new-portfolio',
    title: 'NewPortfolio',
    subtitle: 'Portfolio Profesional Moderno',
    cover: '/assets/imgs/imgsProyects/NewPortfolio.jpg',
    gallery: [
      '/assets/imgs/imgsProyects/NewPortfolio.jpg'
    ],
    overview: 'Portfolio profesional moderno y responsivo desarrollado con Angular 17 y PrimeNG. Incluye secciones de experiencia, proyectos, habilidades y formulario de contacto funcional. Diseño optimizado para diferentes dispositivos con tema oscuro personalizado.',
    stack: ['Angular 17', 'PrimeNG', 'PrimeFlex', 'TypeScript', 'SCSS', 'RxJS'],
    challenges: 'Implementación de diseño responsivo, integración con microservicio backend, configuración de variables de entorno seguras, optimización de performance y SEO.',
    results: 'Portfolio completamente funcional con navegación fluida, formulario de contacto operativo, galería de proyectos interactiva y diseño profesional.',
    demoUrl: 'https://lucamonteleone-portfolio.netlify.app/',
    repoUrl: 'https://github.com/MonteLuca/NewPortfolio'
  },
  {
    slug: 'contact-microservice',
    title: 'Contact Microservice',
    subtitle: 'Microservicio de Gestión de Emails',
    cover: '/assets/imgs/imgsProyects/Microservice.jpg',
    gallery: [
      '/assets/imgs/imgsProyects/Microservice.jpg'
    ],
    overview: 'Microservicio backend desarrollado con Spring Boot para la gestión de emails del portfolio. Soporta múltiples proveedores de email (Resend API y SMTP), validación robusta de datos y configuración CORS optimizada.',
    stack: ['Spring Boot', 'Java', 'Resend API', 'SMTP', 'Docker', 'Railway'],
    challenges: 'Configuración de múltiples proveedores de email, implementación de validaciones robustas, configuración CORS para frontend, containerización y despliegue en la nube.',
    results: 'Microservicio estable y escalable que maneja eficientemente las solicitudes de contacto del portfolio con alta disponibilidad.',
    repoUrl: 'https://github.com/MonteLuca/ContactPortfolioMicroservice'
  }
];