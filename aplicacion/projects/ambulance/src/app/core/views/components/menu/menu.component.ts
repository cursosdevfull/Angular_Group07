import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menu = [
    { title: 'Resumen', url: '/dashboard', icon: 'face' },
    { title: 'Historias', url: '/histories', icon: 'face' },
    { title: 'Médicos', url: '/medics', icon: 'face' },
    { title: 'Pilotos', url: '/drivers', icon: 'face' },
    { title: 'Usuarios', url: '/users', icon: 'face' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
