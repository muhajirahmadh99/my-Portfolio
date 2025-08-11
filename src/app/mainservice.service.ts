import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor() { }
  dark_mode = false;

  gotobottom2() {
    document.querySelector("#sec2")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  // gotobottom2() {
  //   document.querySelector("#sec3")?.scrollIntoView({ behavior: "smooth", block: "start" });
  // }
  gotobottom3() {
    document.querySelector("#sec3")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  gotobottom4() {
    document.querySelector("#sec4")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
