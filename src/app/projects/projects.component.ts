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
        'An interactive quiz platform built with Angular and TypeScript, featuring structured questions, score calculation, and a responsive user interface.',
      url: 'https://hasnatech.github.io/MarketingExcellence/#/',
    },
    {
      img: 'assets/images/ec.png',
      title: 'E-Commerce Website',
      description:
        'A full-stack e-commerce application developed with Laravel and Vue.js, providing an intuitive product-browsing and online shopping experience.',
      url: 'https://muhajirahmadh99.github.io/Ibn_Anwaar/#/home',
    },
    {
      img: 'assets/images/mat.png',
      title: 'Matrimony Website',
      description:
        'A responsive matchmaking platform built with Angular and Firebase, designed to display and manage user profiles across desktop and mobile devices.',
      url: 'https://muhajirahmadh99.github.io/saptjanm-matrimony/',
    },
    {
      img: 'assets/images/vs.png',
      title: 'Voice Make',
      description:
        'A responsive voice-generation application developed with Angular, offering a simple and user-friendly interface for creating voice content.',
      url: 'https://hasnatech.github.io/voicemake-ng/#/',
    },
    {
      img: 'assets/images/yohrDash.png',
      title: 'HR Management Application',
      description:
        'A comprehensive HR management system built with React, TypeScript, and Material UI, covering employee profiles, attendance, leave, payroll, reports, and notifications.',
      url: 'https://yourofficepartners.com/',
    },
  ];
  ngOnInit(): void {
    this.isMobile = window.innerWidth < 640;
  }
}
