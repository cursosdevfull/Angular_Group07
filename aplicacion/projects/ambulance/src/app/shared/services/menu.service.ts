import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menu = [
    { title: 'Resumen', url: '/dashboard', icon: 'face' },
    { title: 'Historias', url: '/histories', icon: 'face' },
    { title: 'Médicos', url: '/medics', icon: 'face' },
    { title: 'Pilotos', url: '/drivers', icon: 'face' },
    { title: 'Usuarios', url: '/users', icon: 'face' },
  ];

  getMenu() {
    return this.menu;
  }

  getDataPath(currentPath: string) {
    return this.menu.find((el) => el.url === currentPath);
  }
}
