import { Component } from '@angular/core';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public service: MainserviceService) {}
  sendEmail() {
    // Change the email address to your desired email
    const emailAddress = 'your-email@example.com';
    const subject = 'Job Application';
    const body =
      'Dear Hiring Manager,\n\nI am interested in applying for the job. Please consider my application.\n\nSincerely,\n[Your Name]';

    // Construct the mailto URL
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    window.location.href = mailtoUrl;
  }

  downloadResume() {
    const resumeUrl = 'assets/Muhajir_Ahamed_Resume.pdf'; // Path to your resume file
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Muhajir_Ahamed_Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
      img: 'assets/images/css.png',
      course: 'SCSS',
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

  portfolio = [
    {
      img: 'assets/images/po.png',
      title: 'Portfolio Website',
      description:
        'A responsive website built using HTML, CSS, and JavaScript.',
      url: 'https://muhajirahmadh99.github.io/my-Portfolio/',
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
      img: 'assets/images/mat.png',
      title: 'Matrimony Website',
      description:
        'A responsive matrimony website built using Angular and Firebase.',
      url: 'https://muhajirahmadh99.github.io/saptjanm-matrimony/',
    },
  ];
}
