import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MedicUseCase } from '../../medics/application/medic.usecase';
import { KeyPadButton } from '../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../shared/interfaces/medatacolum.interface';
import { UtilsService } from '../../shared/services/utils.service';
import { ResultPage } from '../application/result-page.interface';
import { MedicModel } from '../domain/medic.model';
import { DtoMedicExport } from '../application/medic-export.dto';
import { FormMedicComponent } from '../form-medic/form-medic.component';

@Component({
  selector: 'amb-list-medics',
  templateUrl: './list-medics.component.html',
  styleUrls: ['./list-medics.component.css'],
})
export class ListMedicsComponent implements OnInit {
  obsFinish = new Subject<any>();

  data: MedicModel[] = [];
  pageCurrent = 0;
  totalRecords = 0;
  pageSize = environment.pageSize;

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre Completo del médico' },
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
    private readonly medicUseCase: MedicUseCase,
    private readonly utilsService: UtilsService
  ) {
    this.loadDataByPage(0);
  }

  loadDataByPage(page: number) {
    this.medicUseCase
      .getPage(page)
      .pipe(takeUntil(this.obsFinish))
      .subscribe((data: ResultPage) => {
        this.data = data.records as MedicModel[];
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

  openForm(data?: MedicModel) {
    const reference: MatDialogRef<FormMedicComponent> =
      this.utilsService.openModal(FormMedicComponent, {
        disableClose: true,
        panelClass: 'container-modal',
        data,
      });

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        const medic = { ...response };
        delete medic.id;
        this.medicUseCase
          .update(response.id, medic)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((data: MedicModel) =>
            this.loadDataByPage(this.pageCurrent)
          );
      } else {
        this.medicUseCase
          .insert(response)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((data: MedicModel) =>
            this.loadDataByPage(this.pageCurrent)
          );
      }
    });
  }

  delete(row: MedicModel) {
    const obsResponse: Observable<string> = this.utilsService.confirm(
      '¿Está seguro de querer eliminar?'
    );

    obsResponse.subscribe((response) => {
      if (!response) {
        return;
      }

      this.medicUseCase
        .delete(row.id)
        .pipe(takeUntil(this.obsFinish))
        .subscribe((data: MedicModel) => {
          this.loadDataByPage(0);
        });
    });
  }

  download() {
    this.medicUseCase
      .list()
      .pipe(takeUntil(this.obsFinish))
      .subscribe((response: MedicModel[]) => {
        const dto = new DtoMedicExport();
        this.utilsService.openSheet(
          response,
          dto,
          'Listado de médicos',
          'medicos'
        );
      });
  }

  ngOnDestroy() {
    this.obsFinish.next();
    this.obsFinish.complete();
  }
}
