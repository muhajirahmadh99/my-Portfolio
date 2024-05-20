import { Component } from '@angular/core';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public service:MainserviceService) {}
  sendEmail() {
    // Change the email address to your desired email
    const emailAddress = 'your-email@example.com';
    const subject = 'Job Application';
    const body = 'Dear Hiring Manager,\n\nI am interested in applying for the job. Please consider my application.\n\nSincerely,\n[Your Name]';

    // Construct the mailto URL
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    window.location.href = mailtoUrl;
  }

  downloadResume() {
    const resumeUrl = 'assets/MuhajirResume.docx'; // Path to your resume file
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'MuhajirResume.docx'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  progress = [
    {
      course: "HTML / CSS",
      per: "90%",
    },
    {
      course: "Angular",
      per: "95%",
    },
    {
      course: "Tailwind",
      per: "85%",
    },
    {
      course: "Laravel",
      per: "70%",
    },
    {
      course: "Php",
      per: "50%",
    },
    {
      course: "Vue",
      per: "45%",
    },
  ]
}
