import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConfirmComponent } from '../../shared/components/confirm/confirm.component';
import { KeyPadButton } from '../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../shared/interfaces/medatacolum.interface';
import { UtilsService } from '../../shared/services/utils.service';
import { DtoDriverExport } from '../application/driver-export.dto';
import { DriverUseCase } from '../application/driver.usecase';
import { ResultPage } from '../application/result-page.interface';
import { DriverModel } from '../domain/driver.model';
import { FormDriverComponent } from '../form-driver/form-driver.component';
import { DriversService } from '../infraestructure/drivers.service';

@Component({
  selector: 'amb-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css'],
})
export class ListDriversComponent implements OnInit {
  obsFinish = new Subject<any>();

  data: DriverModel[] = [];
  pageCurrent = 0;
  totalRecords = 0;
  pageSize = environment.pageSize;

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Nombre Completo' },
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

  constructor(
    private readonly dialog: MatDialog,
    private readonly driverUseCase: DriverUseCase,
    private readonly utilsService: UtilsService
  ) {
    this.loadDataByPage(0);
  }

  loadDataByPage(page: number) {
    this.driverUseCase
      .getPage(page)
      .pipe(takeUntil(this.obsFinish))
      .subscribe((data: ResultPage) => {
        this.data = data.records as DriverModel[];
        this.totalRecords = data.totalRecords;
      });
  }

  changePage(page: number) {
    this.pageCurrent = page;
    this.loadDataByPage(page);
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
      case 'DOWNLOAD':
        this.download();
        break;
    }
  }

  openForm(data?: DriverModel) {
    const reference: MatDialogRef<FormDriverComponent> =
      this.utilsService.openModal(FormDriverComponent, {
        disableClose: true,
        panelClass: 'container-modal',
        data,
      });

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        const driver = { ...response };
        delete driver.id;
        this.driverUseCase
          .update(response.id, driver)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((data: DriverModel) =>
            this.loadDataByPage(this.pageCurrent)
          );
      } else {
        this.driverUseCase
          .insert(response)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((data: DriverModel) =>
            this.loadDataByPage(this.pageCurrent)
          );
      }
    });
  }

  delete(row: DriverModel) {
    const obsResponse: Observable<string> = this.utilsService.confirm(
      '¿Está seguro de querer eliminar?'
    );

    obsResponse.subscribe((response) => {
      if (!response) {
        return;
      }

      this.driverUseCase
        .delete(row.id)
        .pipe(takeUntil(this.obsFinish))
        .subscribe((data: DriverModel) => {
          this.loadDataByPage(0);
        });

      /*       const index = this.dataOriginal.findIndex((el) => el.id === row.id);
      this.dataOriginal.splice(index, 1);
      this.loadDataByPage(); */
    });
  }

  download() {
    this.driverUseCase
      .list()
      .pipe(takeUntil(this.obsFinish))
      .subscribe((response: DriverModel[]) => {
        const dto = new DtoDriverExport();
        this.utilsService.openSheet(
          response,
          dto,
          'Listado de pilotos',
          'pilotos'
        );
      });
  }

  ngOnDestroy() {
    this.obsFinish.next();
    this.obsFinish.complete();
  }
}
