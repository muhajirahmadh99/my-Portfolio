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
}
