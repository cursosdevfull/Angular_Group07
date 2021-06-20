import {
  EventEmitter,
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'ambc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('fieldEmail') fieldEmail: ElementRef | undefined;
  @ViewChild('fieldPassword') fieldPassword: ElementRef | undefined;
  @Output() onLogin: EventEmitter<User> = new EventEmitter<User>();

  user: User | undefined;

  constructor() {}

  getInputsFormUser(): User {
    return {
      email: this.fieldEmail?.nativeElement.value,
      password: this.fieldPassword?.nativeElement.value,
    };
  }

  handler() {
    const user: User = this.getInputsFormUser();
    this.onLogin.emit(user);
  }

  ngOnInit(): void {}
}
