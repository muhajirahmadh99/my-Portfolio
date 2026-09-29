import { Component, HostListener } from '@angular/core';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  isShow = false;
  topPosToStartShowing = 300;

  // Circumference of the progress ring on the back-to-top button (r = 22)
  readonly ringCircumference = 2 * Math.PI * 22;
  scrollProgress = 0;

  quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  constructor(public service: MainserviceService) {}

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition =
      window.scrollY || document.documentElement.scrollTop || 0;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    this.isShow = scrollPosition >= this.topPosToStartShowing;
    this.scrollProgress =
      maxScroll > 0 ? Math.min(scrollPosition / maxScroll, 1) : 0;
  }

  navigateTo(sectionId: string) {
    this.service.scrollToSection(sectionId);
  }

  gotoTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
