import { Component } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeRoute: string = '';

  constructor(private router: Router, public service: MainserviceService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url; // Set the active route based on the URL
      }
    });


    this.service.dark_mode = localStorage.getItem('darkMode') == 'true';
  }

  isNavbarOpen: boolean = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }

  toggleDarkMode(){
    this.service.dark_mode = !this.service.dark_mode;
    localStorage.setItem('darkMode', this.service.dark_mode ? 'true' : 'false');
  }
}
