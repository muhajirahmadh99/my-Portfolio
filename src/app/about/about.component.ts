import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  isMobile = false;
  projects = [
    {
      img: 'https://yourofficehr.com/assets/Logo_1.svg',
      office: 'Your Office Partners',
      exp: 'July 2025 – Present',
      role: 'React Developer',
      description: `<li>
                Developed responsive UI modules using React, JavaScript &
                Material UI.
              </li>
              <li>
                Integrated REST APIs and improved page performance by 20%.
              </li>`,
      roleimg1: 'assets/images/react.png',
      roleTitle1: 'React',
      roleimg2: 'assets/images/html.png',
      roleTitle2: 'Html',
      roleimg3: 'assets/images/css.png',
      roleTitle3: 'Css',
      roleimg4: 'assets/images/ts.png',
      roleTitle4: 'Ts',
      roleimg5: 'assets/images/js.png',
      roleTitle5: 'Js',
    },
    {
      img: 'https://hasnatech.com/assets/images/logo.png',
      office: 'Hasna Technology',
      exp: 'Feb 2023 – Sep 2024',
      role: 'Angular Developer',
      description: `<li>
              Built cross-platform UI modules with Angular, SCSS, Bootstrap.
            </li>
            <li>Integrated REST APIs and optimized performance by 20%.</li>
            <li>
              Collaborated with designers & backend teams in Agile sprints.
            </li>`,
      roleimg1: 'assets/images/ng.png',
      roleTitle1: 'Angular',
      roleimg2: 'assets/images/html.png',
      roleTitle2: 'Html',
      roleimg3: 'assets/images/css.png',
      roleTitle3: 'Css',
      roleimg4: 'assets/images/ts.png',
      roleTitle4: 'Ts',
      roleimg5: 'assets/images/js.png',
      roleTitle5: 'Js',
    },
    {
      img: 'http://www.infoonclick.com/assets/info.png',
      office: 'Info OnClick LLC',
      exp: 'Sep 2021 – Mar 2022',
      role: 'Angular Developer Trainee',
      description: `<li>
                Developed UI modules using Angular, JavaScript & Material UI.
              </li>
              <li>Worked on API integration & UI bug fixing.</li>`,
      roleimg1: 'assets/images/react.png',
      roleTitle1: 'React',
      roleimg2: 'assets/images/html.png',
      roleTitle2: 'Html',
      roleimg3: 'assets/images/css.png',
      roleTitle3: 'Css',
      roleimg4: 'assets/images/ts.png',
      roleTitle4: 'Ts',
      roleimg5: 'assets/images/js.png',
      roleTitle5: 'Js',
    },
  ];
  ngOnInit(): void {
    this.isMobile = window.innerWidth < 640;
  }
}
