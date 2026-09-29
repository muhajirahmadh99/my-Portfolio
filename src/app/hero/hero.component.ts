import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  roles = [
    'Angular Developer',
    'React Developer',
    'Full-Stack Engineer',
    'UI Enthusiast',
  ];
  typedRole = '';

  techStack = [
    { name: 'Angular', color: 'bg-red-500' },
    { name: 'React', color: 'bg-sky-400' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'Node.js', color: 'bg-green-600' },
    { name: 'Tailwind', color: 'bg-cyan-400' },
  ];

  stats = [
    { value: '3+', label: 'Years experience' },
    { value: '5+', label: 'Projects delivered' },
    { value: '4', label: 'Core technologies' },
  ];

  private roleIndex = 0;
  private isDeleting = false;
  private typingTimer?: ReturnType<typeof setTimeout>;

  constructor(public service: MainserviceService) {}

  ngOnInit(): void {
    const reduceMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion) {
      this.typedRole = this.roles[0];
      return;
    }

    this.typeRole();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimer);
  }

  private typeRole(): void {
    const current = this.roles[this.roleIndex];

    this.typedRole = this.isDeleting
      ? current.slice(0, this.typedRole.length - 1)
      : current.slice(0, this.typedRole.length + 1);

    let delay = this.isDeleting ? 45 : 90;

    if (!this.isDeleting && this.typedRole === current) {
      delay = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.typedRole === '') {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 300;
    }

    this.typingTimer = setTimeout(() => this.typeRole(), delay);
  }

  scrollTo(sectionId: string): void {
    this.service.scrollToSection(sectionId);
  }

  sendEmail() {
    const emailAddress = 'muhajirahamed@gmail.com';
    const subject = 'Job Opportunity';
    const body = 'Hi Muhajir,\n\nI came across your portfolio and would like to discuss an opportunity with you.\n\nRegards,';

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Muhajir_Ahamed_Resume.pdf';
    link.download = 'Muhajir_Ahamed_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
