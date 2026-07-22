import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  ngOnInit() {
    Aos.init({
      duration: 3000, // ms
      offset: 200, // px from trigger point
      once: true, // animate only once
    });
  }
  contactForm = {
    email: '',
    subject: '',
    message: '',
  };

  sendWhatsApp(): void {
    const phoneNumber = '919626260457';

    const whatsappMessage = `
Hello Muhajir,

Email: ${this.contactForm.email}
Subject: ${this.contactForm.subject}

Message:
${this.contactForm.message}
    `.trim();

    const whatsappUrl =
      `https://wa.me/${phoneNumber}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappUrl, '_blank');
  }
}
