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

interface Auth {
  correo: string;
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
  @Output() onLogin: EventEmitter<Auth> = new EventEmitter<Auth>();

  auth!: Auth;

  hide = true;

  formGroupTS: FormGroup;

  constructor() {
    this.formGroupTS = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  getInputsFormUser(): Auth {
    return {
      correo: this.fieldEmail?.nativeElement.value,
      password: this.fieldPassword?.nativeElement.value,
    };
  }

  handler() {
    const auth: Auth = this.getInputsFormUser();
    this.onLogin.emit(auth);
  }

  ngOnInit(): void {}
}
