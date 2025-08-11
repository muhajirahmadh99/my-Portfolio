import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
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
  }
}
