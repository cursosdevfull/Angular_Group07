import { Component } from '@angular/core';
import { User } from './users/domain/user.interface';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  login(user: Partial<User>) {
    console.log(user);
  }
}
