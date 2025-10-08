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
];