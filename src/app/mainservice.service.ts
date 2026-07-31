import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainserviceService {
  dark_mode = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToSection(sectionId: string): void {
    const windowRef = this.document.defaultView;
    const element = this.document.getElementById(sectionId);

    if (!element || !windowRef) {
      return;
    }

    const isMobile = windowRef.innerWidth < 768;

    // Mobile navbar is approximately 72px high
    const navbarOffset = isMobile ? 80 : 120;

    const targetPosition =
      element.getBoundingClientRect().top +
      windowRef.scrollY -
      navbarOffset;

    windowRef.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: 'smooth',
    });
  }

  gotobottom1(): void {
    this.scrollToSection('home');
  }

  gotobottom2(): void {
    this.scrollToSection('about');
  }

  gotobottom3(): void {
    this.scrollToSection('projects');
  }

  gotobottom4(): void {
    this.scrollToSection('contact');
  }
}
