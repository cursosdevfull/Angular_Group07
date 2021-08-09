import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../config/services/config.service';
import { LayoutAbstract } from '../../shared/class/layout';

@Component({
  selector: 'amb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent /* extends LayoutAbstract */ implements OnInit {
  /*   constructor(private readonly configService: ConfigService) {
    this.configService.configuration = {
      layout: {
        header: { hidden: false },
        menu: { hidden: false },
      },
    };
  } */
  /*   constructor(configService: ConfigService) {
    super(configService);
  } */

  ngOnInit(): void {}
}
