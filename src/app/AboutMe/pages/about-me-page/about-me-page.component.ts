import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.scss',
})
export class AboutMePageComponent {
  timeline = [
    // --- Educación base ---
    {
      pos: 'down',
      type: 'edu',
      title: 'Bachiller en Economía',
      org: 'Inst. Sup. A. Schweitzer',
      date: '2015–2019',
    },

    // --- Experiencia inicial ---
    {
      pos: 'up',
      type: 'work',
      title: 'Backend Dev',
      org: 'Vodafone',
      date: 'feb 2023–jul 2023',
    },
    {
      pos: 'up',
      type: 'work',
      title: 'Front-end Dev',
      org: 'AmCham Argentina',
      date: 'jul 2023–ene 2024',
    },
    {
      pos: 'up',
      type: 'work',
      title: 'Full-stack Dev',
      org: 'Freelance (Chokiss)',
      date: 'nov 2023–may 2024',
    },
    {
      pos: 'up',
      type: 'work',
      title: 'Front-end Dev',
      org: 'Freelance (Camarco)',
      date: 'sep 2023–ago 2024',
    },

    // --- Experiencia actual ---
    {
      pos: 'up',
      type: 'work',
      title: 'Full-stack Dev',
      org: 'Benza Value',
      date: 'jul 2024–Presente',
    },
    {
      pos: 'up',
      type: 'work',
      title: 'WordPress Dev',
      org: 'ClickToFish',
      date: 'may 2025–sep 2025',
    },
    {
      pos: 'up',
      type: 'work',
      title: 'WordPress Dev',
      org: 'SUPOVA',
      date: 'jul 2025–oct 2025',
    },

    // --- Cursos y certificaciones ---
    {
      pos: 'down',
      type: 'edu',
      title: 'Angular: De cero a Experto',
      org: 'Udemy',
      date: 'may 2025',
    },
    {
      pos: 'down',
      type: 'edu',
      title: 'Python TOTAL',
      org: 'Udemy',
      date: 'jul 2025',
    },
  ];

  skills = [
    { name: 'Java', area: 'Backend', years: 3, icon: 'assets/imgs/java.png' },
    {
      name: 'Spring Boot',
      area: 'Backend',
      years: 3,
      icon: 'assets/imgs/spring-boot.png',
    },
    {
      name: 'Angular',
      area: 'Frontend',
      years: 3,
      icon: 'assets/imgs/Angular.png',
    },
    {
      name: 'WordPress',
      area: 'Frontend',
      years: 2,
      icon: 'assets/imgs/wordpress.png',
    },
    {
      name: 'MySQL',
      area: 'Database',
      years: 3,
      icon: 'assets/imgs/mysql.png',
    },
    {
      name: 'MongoDB',
      area: 'Database',
      years: 1,
      icon: 'assets/imgs/mongodb.png',
    },
    {
      name: 'Python',
      area: 'Backend',
      years: 1,
      icon: 'assets/imgs/python.png',
    },
  ];
}
