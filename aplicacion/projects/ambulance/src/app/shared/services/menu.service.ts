import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menu = [
    { title: 'Resumen', url: '/dashboard', icon: 'dashboard' },
    { title: 'Historias', url: '/histories', icon: 'history' },
    { title: 'Médicos', url: '/medics', icon: 'medic' },
    { title: 'Pilotos', url: '/drivers', icon: 'driver' },
    { title: 'Usuarios', url: '/users', icon: 'user' },
  ];

  getMenu() {
    return this.menu;
  }

  getDataPath(currentPath: string) {
    return this.menu.find((el) => el.url === currentPath);
  }
}
