import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent  implements AfterViewInit, OnInit {
  skills = [
    {
      img: 'assets/images/html.png',
      course: 'HTML',
    },
    {
      img: 'assets/images/css.png',
      course: 'CSS',
    },
    {
      img: 'assets/images/ng.png',
      course: 'Angular',
    },
    {
      img: 'assets/images/boot.png',
      course: 'Bootstrap',
    },
    {
      img: 'assets/images/mui.png',
      course: 'Material Ui',
    },
    {
      img: 'assets/images/tail.png',
      course: 'Tailwind Css',
    },
    {
      img: 'assets/images/js.png',

      course: 'JavaScript',
    },
    {
      img: 'assets/images/ts.png',
      course: 'TypeScript',
    },
    {
      img: 'assets/images/node.png',
      course: 'Node.js',
    },
    {
      img: 'assets/images/react.png',
      course: 'React.js',
    },
    {
      img: 'assets/images/express.png',
      course: 'Express.js',
    },
    {
      img: 'assets/images/postman.png',
      course: 'Postman',
    },
    {
      img: 'assets/images/mongo.png',
      course: 'MongoDB',
    },
    {
      img: 'assets/images/MySQL.png',
      course: 'MySQL',
    },
  ];

    @ViewChildren('skillCard') skillCards!: QueryList<ElementRef>;

    ngAfterViewInit() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('bounce');
            }
          });
        },
        { threshold: 0.3 } // triggers when 30% of card is visible
      );

      this.skillCards.forEach((card) => {
        observer.observe(card.nativeElement);
      });
    }
    ngOnInit() {
      Aos.init({
        duration: 3000, // ms
        offset: 200, // px from trigger point
        once: true, // animate only once
      });
    }
}
