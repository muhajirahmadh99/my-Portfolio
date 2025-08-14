import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  isMobile = false;
  portfolio = [
    {
      img: 'assets/images/mx.png',
      title: 'Marketing Excellence',
      description:
        'A fully functional Quiz website built using Angular and typescript.',
      url: 'https://hasnatech.github.io/MarketingExcellence/#/',
    },
    {
      img: 'assets/images/ec.png',
      title: 'E-commerce Website',
      description:
        'A fully functional e-commerce website built using Laravel and Vue.',
      url: 'https://muhajirahmadh99.github.io/Ibn_Anwaar/#/home',
    },
    {
      img: 'assets/images/mat.png',
      title: 'Matrimony Website',
      description:
        'A responsive matrimony website built using Angular and Firebase.',
      url: 'https://muhajirahmadh99.github.io/saptjanm-matrimony/',
    },
    {
      img: 'assets/images/vs.png',
      title: 'Voice Make',
      description: 'A responsive matrimony website built using Angular.',
      url: 'https://hasnatech.github.io/voicemake-ng/#/',
    },
  ];
  ngOnInit(): void {
    this.isMobile = window.innerWidth < 640;
  }
}
