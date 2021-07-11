import { Component } from '@angular/core';
import { ConfigLayout } from './config/interfaces/config.interface';
import { ConfigService } from './config/services/config.service';
import { User } from './users/domain/user.interface';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  expanded = true;
  config!: ConfigLayout;

  constructor(private readonly configService: ConfigService) {
    this.configService.configuration.subscribe((config: ConfigLayout) => {
      this.config = config;
    });
  }

  login(user: Partial<User>) {
    console.log(user);
  }

  showExpand(expanded: boolean) {
    this.expanded = expanded;
  }
}
