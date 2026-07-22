import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainserviceService {
  dark_mode = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToSection(sectionId: string): void {
    const element = this.document.getElementById(sectionId);
    const windowRef = this.document.defaultView;

    if (!element || !windowRef) {
      return;
    }

    const navbarOffset = 40;

    const elementPosition =
      element.getBoundingClientRect().top + windowRef.scrollY;

    windowRef.scrollTo({
      top: elementPosition - navbarOffset,
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
