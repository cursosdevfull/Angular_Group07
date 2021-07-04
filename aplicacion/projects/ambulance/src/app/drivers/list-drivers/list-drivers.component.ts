import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../shared/interfaces/medatacolum.interface';

@Component({
  selector: 'amb-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css'],
})
export class ListDriversComponent implements OnInit {
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
    { field: 'nombre', title: 'Nombre Completo' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
