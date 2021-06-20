import {
  EventEmitter,
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { User } from 'projects/ambulance/src/app/users/domain/user.interface';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  @Output() onLogin: EventEmitter<Partial<User>> = new EventEmitter<
    Partial<User>
  >();
  ngOnInit(): void {}

  login(user: Partial<User>) {
    this.onLogin.emit(user);
  }
}
