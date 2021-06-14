import { Component } from '@angular/core';

interface User {
  name: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-own',
  templateUrl: './own.component.html',
  styleUrls: ['./own.component.css'],
})
export class OwnComponent {
  listUsers: User[] = [
    { name: 'Sergio', lastname: 'Hidalgo', age: 40 },
    { name: 'Carmen', lastname: 'Alegría', age: 50 },
    { name: 'Andrea', lastname: 'Serra', age: 22 },
    { name: 'Javier', lastname: 'Luque', age: 34 },
  ];

  constructor() {
    // this.listUsers.forEach((el) => console.log(el));
    /*     const length = this.listUsers.length;
    for (let indice = 0; indice < length; indice++) {
      console.log(this.listUsers[indice]);
    } */
    /*     for (const user of this.listUsers) {
      console.log(user);
    } */
  }
}
