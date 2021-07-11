import {
  EventEmitter,
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  hide = true;

  formGroupTS: FormGroup;

  constructor() {
    this.formGroupTS = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

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
