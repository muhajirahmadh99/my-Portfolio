import { Component, OnInit } from '@angular/core';

interface ExpertiseCard {
  title: string;
  description: string;
  tags: string[];
  iconPath: string;
  animationDelay: number;
}
@Component({
  selector: 'app-do',
  templateUrl: './do.component.html',
  styleUrls: ['./do.component.scss'],
})
export class DoComponent implements OnInit {
  isMobile = false;

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 640;
  }


expertiseCards: ExpertiseCard[] = [
  {
    title: 'Full-Stack Development',
    description:
      'Building complete web applications using Angular, React, TypeScript, Node.js, and modern development practices.',
    tags: ['Angular', 'React', 'Node.js'],
    iconPath: 'm8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12',
    animationDelay: 0,
  },
  {
    title: 'APIs & Database Integration',
    description:
      'Developing and integrating REST APIs, backend business logic, and reliable data flows using PostgreSQL and MySQL.',
    tags: ['REST APIs', 'PostgreSQL', 'MySQL'],
    iconPath:
      'M4 6c0 1.1 3.58 2 8 2s8-.9 8-2-3.58-2-8-2-8 .9-8 2Zm0 0v6c0 1.1 3.58 2 8 2s8-.9 8-2V6M4 12v6c0 1.1 3.58 2 8 2s8-.9 8-2v-6',
    animationDelay: 100,
  },
  {
    title: 'UI Engineering & Optimization',
    description:
      'Creating responsive, reusable, and user-friendly interfaces with a focus on accessibility, maintainability, and performance.',
    tags: ['Tailwind CSS', 'Material UI', 'Responsive UI'],
    iconPath:
      'M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm4 16h8m-4-5v5',
    animationDelay: 200,
  },
];
}
