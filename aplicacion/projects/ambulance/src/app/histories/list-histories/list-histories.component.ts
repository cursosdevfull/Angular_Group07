import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../shared/interfaces/medatacolum.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { KeyPadButton } from '../../shared/interfaces/keybutton.interface';
import { UtilsService } from '../../shared/services/utils.service';
import { ResultPage } from '../application/result-page.interface';
import { HistoryUseCase } from '../application/history.usecase';
import { HistoryModel } from '../domain/history.model';
import { FormHistoryComponent } from '../form-history/form-history.component';
import { DtoHistoryExport } from '../application/history-export.dto';

@Component({
  selector: 'amb-list-histories',
  templateUrl: './list-histories.component.html',
  styleUrls: ['./list-histories.component.css'],
})
export class ListHistoriesComponent implements OnInit {
  obsFinish = new Subject<any>();

  data: HistoryModel[] = [];
  pageCurrent = 0;
  totalRecords = 0;
  pageSize = environment.pageSize;

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre del paciente' },
    { field: 'apellido', title: 'Apellido del paciente' },
    { field: 'contratante', title: 'Compañía' },
    { field: 'poliza', title: 'Poliza' },
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
    private readonly historyUseCase: HistoryUseCase,
    private readonly utilsService: UtilsService
  ) {
    this.loadDataByPage(0);
  }

  loadDataByPage(page: number) {
    this.historyUseCase
      .getPage(page)
      .pipe(takeUntil(this.obsFinish))
      .subscribe((data: ResultPage) => {
        this.data = data.records as HistoryModel[];
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

  openForm(data?: HistoryModel) {
    const reference: MatDialogRef<FormHistoryComponent> =
      this.utilsService.openModal(FormHistoryComponent, {
        disableClose: true,
        panelClass: 'container-modal',
        data,
      });

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        const history = response.history;
        this.historyUseCase
          .update(response.id, history)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((result: HistoryModel) => {
            this.loadDataByPage(this.pageCurrent);
            this.utilsService.notifier('Registro actualizado');
          });
      } else {
        this.historyUseCase
          .insert(response.history)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((result: HistoryModel) => {
            this.loadDataByPage(this.pageCurrent);
            this.utilsService.notifier('Registro insertado');
          });
      }
    });
  }

  delete(row: HistoryModel) {
    const obsResponse: Observable<string> = this.utilsService.confirm(
      '¿Está seguro de querer eliminar?'
    );

    obsResponse.subscribe((response) => {
      if (!response) {
        return;
      }

      this.historyUseCase
        .delete(row.id)
        .pipe(takeUntil(this.obsFinish))
        .subscribe((data: HistoryModel) => {
          this.loadDataByPage(0);
        });
    });
  }

  download() {
    this.historyUseCase
      .list()
      .pipe(takeUntil(this.obsFinish))
      .subscribe((response: HistoryModel[]) => {
        const dto = new DtoHistoryExport();
        this.utilsService.openSheet(
          response,
          dto,
          'Listado de médicos',
          'historyos'
        );
      });
  }

  ngOnDestroy() {
    this.obsFinish.next();
    this.obsFinish.complete();
  }
}
