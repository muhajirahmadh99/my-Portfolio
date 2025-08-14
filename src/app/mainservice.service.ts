import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainserviceService {
  constructor() {}
  dark_mode = false;

  gotobottom1() {
    document
      .querySelector('#home')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  gotobottom2() {
    document
      .querySelector('#about')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  gotobottom3() {
    document
      .querySelector('#project')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // gotobottom2() {
  //   document.querySelector("#sec3")?.scrollIntoView({ behavior: "smooth", block: "start" });
  // }

  gotobottom4() {
    document
      .querySelector('#sec4')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
