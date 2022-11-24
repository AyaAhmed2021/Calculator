import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  theme1(){
    localStorage.setItem("theme","theme1")
  }

  theme2(){
    localStorage.setItem("theme","theme2")
  }

  theme3(){
    localStorage.setItem("theme","theme3")
  }
}
