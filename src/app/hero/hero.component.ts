import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
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
}
