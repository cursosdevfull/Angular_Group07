import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../shared/interfaces/medatacolum.interface';

@Component({
  selector: 'amb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  data: any = [
    {
      id: 1,
      nombre: 'Jorge Atala',
    },
    {
      id: 2,
      nombre: 'Fernanda Campos',
    },
    {
      id: 3,
      nombre: 'Raúl Caravaglia',
    },
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre Completo del usuario' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
