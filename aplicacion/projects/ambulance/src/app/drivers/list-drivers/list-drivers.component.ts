import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'projects/ambulance/src/environments/environment';
import { ConfirmComponent } from '../../shared/components/confirm/confirm.component';
import { KeyPadButton } from '../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../shared/interfaces/medatacolum.interface';
import { FormDriverComponent } from '../form-driver/form-driver.component';

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
      id: 4,
      nombre: 'Jorge Atala',
    },
    {
      id: 5,
      nombre: 'Fernanda Campos',
    },
    {
      id: 6,
      nombre: 'Raúl Caravaglia',
    },
    {
      id: 7,
      nombre: 'Jorge Atala',
    },
    {
      id: 8,
      nombre: 'Fernanda Campos',
    },
    {
      id: 9,
      nombre: 'Raúl Caravaglia',
    },
    {
      id: 10,
      nombre: 'Jorge Atala',
    },
    {
      id: 11,
      nombre: 'Fernanda Campos',
    },
    {
      id: 12,
      nombre: 'Raúl Caravaglia',
    },
    {
      id: 13,
      nombre: 'Jorge Atala',
    },
    {
      id: 14,
      nombre: 'Fernanda Campos',
    },
    {
      id: 15,
      nombre: 'Raúl Caravaglia',
    },
    {
      id: 16,
      nombre: 'Jorge Atala',
    },
    {
      id: 17,
      nombre: 'Fernanda Campos',
    },
    {
      id: 18,
      nombre: 'Raúl Caravaglia',
    },
    {
      id: 19,
      nombre: 'Jorge Atala',
    },
    {
      id: 20,
      nombre: 'Fernanda Campos',
    },
    {
      id: 21,
      nombre: 'Raúl Caravaglia',
    },
    {
      id: 22,
      nombre: 'Jorge Atala',
    },
    {
      id: 23,
      nombre: 'Fernanda Campos',
    },
    {
      id: 24,
      nombre: 'Raúl Caravaglia',
    },
    {
      id: 25,
      nombre: 'Jorge Atala',
    },
    {
      id: 26,
      nombre: 'Fernanda Campos',
    },
    {
      id: 27,
      nombre: 'Raúl Caravaglia',
    },
    {
      id: 28,
      nombre: 'Jorge Atala',
    },
    {
      id: 29,
      nombre: 'Fernanda Campos',
    },
    {
      id: 30,
      nombre: 'Raúl Caravaglia',
    },
    {
      id: 31,
      nombre: 'Jorge Atala',
    },
    {
      id: 32,
      nombre: 'Fernanda Campos',
    },
    {
      id: 33,
      nombre: 'Raúl Caravaglia',
    },
    {
      id: 34,
      nombre: 'Jorge Atala',
    },
    {
      id: 35,
      nombre: 'Fernanda Campos',
    },
    {
      id: 36,
      nombre: 'Raúl Caravaglia',
    },
    {
      id: 37,
      nombre: 'Jorge Atala',
    },
    {
      id: 38,
      nombre: 'Fernanda Campos',
    },
    {
      id: 39,
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
    {
      icon: 'cloud_download',
      tooltip: 'DESCARGAR',
      color: 'accent',
      action: 'DOWNLOAD',
    },
    { icon: 'add', tooltip: 'AGREGAR', color: 'primary', action: 'NEW' },
  ];

  constructor(private readonly dialog: MatDialog) {
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

  edit(row: any) {
    this.openForm(row);
  }

  action(act: string) {
    switch (act) {
      case 'NEW':
        this.openForm();
        break;
    }
  }

  openForm(data: any = null) {
    const reference: MatDialogRef<FormDriverComponent> = this.dialog.open(
      FormDriverComponent,
      {
        disableClose: true,
        panelClass: 'container-modal',
        data,
      }
    );

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }
      if (response.id) {
        const pos = this.dataOriginal.findIndex(
          (row) => row.id === response.id
        );
        this.dataOriginal[pos].nombre = response.nombre;
        this.loadDataByPage();
      } else {
        const maxIndex =
          [...this.dataOriginal].sort((a, b) => b.id - a.id)[0].id + 1;
        this.dataOriginal.push({ id: maxIndex, nombre: response.nombre });
        this.loadDataByPage();
      }
    });
  }

  delete(row: any) {
    const reference: MatDialogRef<ConfirmComponent> = this.dialog.open(
      ConfirmComponent,
      {
        disableClose: true,
        width: '320px',
      }
    );

    reference.componentInstance.message = '¿Está seguro?';

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      const index = this.dataOriginal.findIndex((el) => el.id === row.id);
      this.dataOriginal.splice(index, 1);
      this.loadDataByPage();
    });
  }
}
