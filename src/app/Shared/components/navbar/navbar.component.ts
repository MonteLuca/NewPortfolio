import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  sidebarVisible: boolean = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  closeSidebar() {
    this.sidebarVisible = false;
  }

  downloadCV() {
    window.open('https://drive.google.com/file/d/1PhQmfPk9p8fwWtJ-Ak3mAzj3wQR9zV74/view', '_blank');
  }
}
