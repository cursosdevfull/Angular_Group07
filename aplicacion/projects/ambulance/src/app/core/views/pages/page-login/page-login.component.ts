import {
  EventEmitter,
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'projects/ambulance/src/app/config/services/config.service';
import { UserModel } from 'projects/ambulance/src/app/users/domain/user.model';
import { Subscription } from 'rxjs';
import { AuthUseCase } from '../../../application/auth.usecase';
import { Auth } from '../../../domain/auth.interface';
import { Token } from '../../../domain/token.interface';
@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  @Output() onLogin: EventEmitter<Partial<UserModel>> = new EventEmitter<
    Partial<UserModel>
  >();

  subscription!: Subscription;

  constructor(
    private readonly configService: ConfigService,
    private readonly router: Router,
    private readonly authUseCase: AuthUseCase
  ) {
    this.configService.configuration = {
      layout: {
        header: { hidden: true },
        menu: { hidden: true },
      },
    };
  }

  ngOnInit(): void {}

  login(auth: Auth) {
    this.subscription = this.authUseCase
      .login(auth)
      .subscribe((response: Token) => {
        this.authUseCase.setStorage('accessToken', response.accessToken);
        this.authUseCase.setStorage('refreshToken', response.refreshToken);

        this.router.navigate(['/dashboard']);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.configService.configuration = {
      layout: {
        header: { hidden: false },
        menu: { hidden: false },
      },
    };
  }
}
