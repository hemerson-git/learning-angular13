import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'hemerson'
  userData = {
    email: 'jonhdoe@example.com',
    role: 'admin'
  }

  title = 'curso-angular';
}
