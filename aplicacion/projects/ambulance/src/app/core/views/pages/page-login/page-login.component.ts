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

  constructor(
    private readonly configService: ConfigService,
    private readonly router: Router
  ) {
    this.configService.configuration = {
      layout: {
        header: { hidden: true },
        menu: { hidden: true },
      },
    };
  }

  ngOnInit(): void {}

  login(user: Partial<User>) {
    this.router.navigate(['/dashboard']);
  }

  ngOnDestroy(): void {
    this.configService.configuration = {
      layout: {
        header: { hidden: false },
        menu: { hidden: false },
      },
    };
  }
}
