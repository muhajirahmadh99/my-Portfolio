import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

type Channel = 'whatsapp' | 'email';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnDestroy {
  readonly emailAddress = 'muhajirahamed@gmail.com';
  readonly phoneNumber = '919626260457';
  readonly messageMax = 1000;

  subjects = ['Job opportunity', 'Freelance project', 'Collaboration', 'Just saying hi'];

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  channel: Channel = 'whatsapp';
  copied = false;
  sent = false;

  private copiedTimer?: ReturnType<typeof setTimeout>;

  ngOnDestroy(): void {
    clearTimeout(this.copiedTimer);
  }

  pickSubject(subject: string): void {
    this.contactForm.subject = subject;
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.emailAddress);
      this.copied = true;
      clearTimeout(this.copiedTimer);
      this.copiedTimer = setTimeout(() => (this.copied = false), 2000);
    } catch {
      window.location.href = `mailto:${this.emailAddress}`;
    }
  }

  send(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const { name, email, subject, message } = this.contactForm;

    if (this.channel === 'whatsapp') {
      const text = `
Hello Muhajir,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `.trim();

      window.open(
        `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(text)}`,
        '_blank',
      );
    } else {
      const body = `${message}\n\n— ${name} (${email})`;
      window.location.href = `mailto:${this.emailAddress}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
    }

    this.sent = true;
  }

  reset(form: NgForm): void {
    form.resetForm();
    this.contactForm = { name: '', email: '', subject: '', message: '' };
    this.sent = false;
  }
}
