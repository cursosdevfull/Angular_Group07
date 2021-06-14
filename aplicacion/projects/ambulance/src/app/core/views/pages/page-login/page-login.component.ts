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
  @ViewChild('fieldEmail') fieldEmail: ElementRef | undefined;
  @ViewChild('fieldPassword') fieldPassword: ElementRef | undefined;
  @Output() onLogin: EventEmitter<Partial<User>> = new EventEmitter<
    Partial<User>
  >();

  user: Partial<User> = {};

  /* userEmail = '';
  userPassword = ''; */

  constructor() {}

  getInputsFormUser(): Partial<User> {
    return {
      email: this.fieldEmail?.nativeElement.value,
      password: this.fieldPassword?.nativeElement.value,
    };
    /*     const user: Partial<User> = {
      email: this.fieldEmail?.nativeElement.value,
      password: this.fieldPassword?.nativeElement.value
    };
    return user */
  }

  handler() {
    console.log('Evento clic');
    const user: Partial<User> = this.getInputsFormUser();
    this.onLogin.emit(user);
    // console.log(this.getInputsFormUser());

    /*  console.log(this.user); */
    /*     console.log(this.fieldEmail?.nativeElement.value);
    console.log(this.fieldPassword?.nativeElement.value); */
    /*     console.log('userEmail', this.email);
    console.log('userPassword', this.password); */
  }

  set email(evt: any) {
    /* this.userEmail = evt.target.value.toUpperCase(); */
    this.user.email = evt.target.value.toUpperCase();
  }

  get email() {
    return this.user.email?.toLowerCase();
    /*  return this.userEmail.toLowerCase(); */
  }

  set password(evt: any) {
    this.user.password = evt.target.value.trim();
    /* this.userPassword = evt.target.value.trim(); */
  }

  get password() {
    return this.user.password;
    /* return this.userPassword; */
  }

  ngOnInit(): void {}
}
