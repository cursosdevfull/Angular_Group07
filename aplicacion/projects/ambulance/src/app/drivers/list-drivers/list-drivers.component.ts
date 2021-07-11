import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { KeyPadButton } from '../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../shared/interfaces/medatacolum.interface';

@Component({
  selector: 'amb-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css'],
})
export class ListDriversComponent implements OnInit {
  dataOriginal: any[] = [
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

  data: any;
  pageCurrent = 0;
  pageSize = environment.pageSize;

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre Completo' },
  ];

  keypadButtons: KeyPadButton[] = [
    { icon: 'add', tooltip: 'AGREGAR', color: 'primary', action: 'NEW' },
    {
      icon: 'cloud_download',
      tooltip: 'DESCARGAR',
      color: 'accent',
      action: 'DOWNLOAD',
    },
  ];

  constructor() {
    this.loadDataByPage();
  }

  loadDataByPage() {
    this.data = this.dataOriginal.slice(
      this.pageCurrent * this.pageSize,
      this.pageCurrent * this.pageSize + this.pageSize
    );
  }

  changePage(page: number) {
    this.pageCurrent = page;
    this.loadDataByPage();
  }

  ngOnInit(): void {}

  action(act: string) {
    console.log(act);
  }
}
