import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuService } from 'projects/ambulance/src/app/shared/services/menu.service';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() onExpand: EventEmitter<boolean> = new EventEmitter<boolean>();
  menu: any[] = [];
  expanded = true;

  constructor(menuService: MenuService) {
    this.menu = menuService.getMenu();
  }

  ngOnInit(): void {}

  sentExpand() {
    this.expanded = !this.expanded;
    this.onExpand.emit(this.expanded);
  }
}
