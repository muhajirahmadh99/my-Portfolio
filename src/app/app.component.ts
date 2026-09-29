import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import * as Aos from 'aos';
import { MainserviceService } from './mainservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-Portfolio';

  constructor(public service: MainserviceService) {}
  ngOnInit(): void {
    initFlowbite();

    // Scroll animations for every [data-aos] element on the page
    Aos.init({
      duration: 800, // ms
      offset: 80, // px from trigger point
      once: true, // animate only once
    });
  }
}
