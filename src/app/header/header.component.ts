import { Component, HostListener } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  activeRoute: string = '';

  // In page order, so the scroll spy can pick the last one passed
  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  activeSection = 'home';
  isScrolled = false;
  scrollProgress = 0;
  isNavbarOpen: boolean = false;

  constructor(
    private router: Router,
    public service: MainserviceService,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url; // Set the active route based on the URL
      }
    });

    this.service.dark_mode = localStorage.getItem('darkMode') == 'true';
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    this.isScrolled = scrollY > 20;
    this.scrollProgress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

    // Bottom of the page: highlight the last section
    if (maxScroll - scrollY < 4) {
      this.activeSection = this.navItems[this.navItems.length - 1].id;
      return;
    }

    const probe = window.innerHeight * 0.35;
    let current = this.navItems[0].id;

    for (const item of this.navItems) {
      const el = document.getElementById(item.id);
      if (el && el.getBoundingClientRect().top <= probe) {
        current = item.id;
      }
    }

    this.activeSection = current;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeNavbar();
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }

  toggleDarkMode() {
    this.service.dark_mode = !this.service.dark_mode;
    localStorage.setItem('darkMode', this.service.dark_mode ? 'true' : 'false');
  }

  navigateToSection(sectionId: string): void {
    const menuWasOpen = this.isNavbarOpen;

    this.isNavbarOpen = false;
    this.activeSection = sectionId;

    // Let the mobile menu (duration-300) finish closing first
    const delay = menuWasOpen ? 300 : 0;

    setTimeout(() => {
      this.service.scrollToSection(sectionId);
    }, delay);
  }
}
