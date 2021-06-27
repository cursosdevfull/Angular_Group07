import { Component, OnInit } from '@angular/core';
import { MenuService } from 'projects/ambulance/src/app/shared/services/menu.service';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menu: any[] = [];

  constructor(menuService: MenuService) {
    this.menu = menuService.getMenu();
  }

  ngOnInit(): void {}
}
