import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  id:string=''

    ngOnInit(): void {
      this.id=localStorage.getItem("theme")
    }

}
