import { Component } from '@angular/core';

interface Project {
  img: string;
  title: string;
  description: string;
  url: string;
  tech: string[];
  categories: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  filters = ['All', 'Angular', 'React', 'Full-Stack'];
  activeFilter = 'All';

  portfolio: Project[] = [
    {
      img: 'assets/images/yohrDash.png',
      title: 'HR Management Application',
      description:
        'A comprehensive HR management system built with React, TypeScript, and Material UI, covering employee profiles, attendance, leave, payroll, reports, and notifications.',
      url: 'https://yourofficepartners.com/',
      tech: ['React', 'TypeScript', 'Material UI'],
      categories: ['React'],
      featured: true,
    },
    {
      img: 'assets/images/mx.png',
      title: 'Marketing Excellence',
      description:
        'An interactive quiz platform built with Angular and TypeScript, featuring structured questions, score calculation, and a responsive user interface.',
      url: 'https://hasnatech.github.io/MarketingExcellence/#/',
      tech: ['Angular', 'TypeScript'],
      categories: ['Angular'],
    },
    {
      img: 'assets/images/ec.png',
      title: 'E-Commerce Website',
      description:
        'A full-stack e-commerce application developed with Laravel and Vue.js, providing an intuitive product-browsing and online shopping experience.',
      url: 'https://muhajirahmadh99.github.io/Ibn_Anwaar/#/home',
      tech: ['Vue.js', 'Laravel'],
      categories: ['Full-Stack'],
    },
    {
      img: 'assets/images/mat.png',
      title: 'Matrimony Website',
      description:
        'A responsive matchmaking platform built with Angular and Firebase, designed to display and manage user profiles across desktop and mobile devices.',
      url: 'https://muhajirahmadh99.github.io/saptjanm-matrimony/',
      tech: ['Angular', 'Firebase'],
      categories: ['Angular', 'Full-Stack'],
    },
    {
      img: 'assets/images/vs.png',
      title: 'Voice Make',
      description:
        'A responsive voice-generation application developed with Angular, offering a simple and user-friendly interface for creating voice content.',
      url: 'https://hasnatech.github.io/voicemake-ng/#/',
      tech: ['Angular', 'TypeScript'],
      categories: ['Angular'],
    },
  ];

  get featuredProject(): Project | undefined {
    return this.activeFilter === 'All'
      ? this.portfolio.find((p) => p.featured)
      : undefined;
  }

  get visibleProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return this.portfolio.filter((p) => !p.featured);
    }
    return this.portfolio.filter((p) =>
      p.categories.includes(this.activeFilter),
    );
  }

  countFor(filter: string): number {
    return filter === 'All'
      ? this.portfolio.length
      : this.portfolio.filter((p) => p.categories.includes(filter)).length;
  }

  hostOf(url: string): string {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return url;
    }
  }

  trackByTitle(_: number, p: Project) {
    return p.title;
  }
}
