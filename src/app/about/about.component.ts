import { Component } from '@angular/core';

interface Experience {
  img: string;
  office: string;
  exp: string;
  role: string;
  current?: boolean;
  highlights: string[];
  tech: { name: string; img: string }[];
}

const TECH = {
  angular: { name: 'Angular', img: 'assets/images/ng.png' },
  react: { name: 'React', img: 'assets/images/react.png' },
  html: { name: 'HTML', img: 'assets/images/html.png' },
  css: { name: 'CSS', img: 'assets/images/css.png' },
  ts: { name: 'TypeScript', img: 'assets/images/ts.png' },
  js: { name: 'JavaScript', img: 'assets/images/js.png' },
  mui: { name: 'Material UI', img: 'assets/images/mui.png' },
  bootstrap: { name: 'Bootstrap', img: 'assets/images/boot.png' },
};

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  highlights = [
    { value: '3+', label: 'Years of experience' },
    { value: '3', label: 'Companies' },
    { value: '5+', label: 'Projects delivered' },
    { value: '20%', label: 'Performance boost' },
  ];

  // Most recent first
  experiences: Experience[] = [
    {
      img: 'assets/images/logo.svg',
      office: 'Your Office Partners',
      exp: 'Jul 2025 – Present',
      role: 'React Developer',
      current: true,
      highlights: [
        'Developed responsive UI modules using React, JavaScript & Material UI.',
        'Integrated REST APIs and improved page performance by 20%.',
      ],
      tech: [TECH.react, TECH.js, TECH.mui, TECH.html, TECH.css],
    },
    {
      img: 'assets/images/hasna.jpeg',
      office: 'Hasna Technology',
      exp: 'Feb 2023 – Sep 2024',
      role: 'Angular Developer',
      highlights: [
        'Built cross-platform UI modules with Angular, SCSS & Bootstrap.',
        'Integrated REST APIs and optimized performance by 20%.',
        'Collaborated with designers & backend teams in Agile sprints.',
      ],
      tech: [TECH.angular, TECH.ts, TECH.bootstrap, TECH.html, TECH.css],
    },
    {
      img: 'assets/images/infoOnclick.jpg',
      office: 'Info OnClick LLC',
      exp: 'Sep 2021 – Mar 2022',
      role: 'Angular Developer Trainee',
      highlights: [
        'Developed UI modules using Angular, JavaScript & Material UI.',
        'Worked on API integration & UI bug fixing.',
      ],
      tech: [TECH.angular, TECH.js, TECH.mui, TECH.html, TECH.css],
    },
  ];
}
