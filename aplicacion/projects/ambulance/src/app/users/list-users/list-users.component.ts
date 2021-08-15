import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { KeyPadButton } from '../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../shared/interfaces/medatacolum.interface';
import { UtilsService } from '../../shared/services/utils.service';
import { ResultPage } from '../application/result-page.interface';
import { DtoUserExport } from '../application/user-export.dto';
import { UserUseCase } from '../application/user.usecase';
import { UserModel } from '../domain/user.model';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'amb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  obsFinish = new Subject<any>();

  data: UserModel[] = [];
  pageCurrent = 0;
  totalRecords = 0;
  pageSize = environment.pageSize;

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre Completo' },
    { field: 'correo', title: 'Correo' },
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
    private readonly userUseCase: UserUseCase,
    private readonly utilsService: UtilsService
  ) {
    this.loadDataByPage(0);
  }

  ngOnInit(): void {}

  loadDataByPage(page: number) {
    this.userUseCase
      .getPage(page)
      .pipe(takeUntil(this.obsFinish))
      .subscribe((data: ResultPage) => {
        this.data = data.records as UserModel[];
        this.totalRecords = data.totalRecords;
      });
  }

  changePage(page: number) {
    this.pageCurrent = page;
    this.loadDataByPage(page);
  }

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

  openForm(data?: UserModel) {
    const reference: MatDialogRef<FormUserComponent> =
      this.utilsService.openModal(FormUserComponent, {
        disableClose: true,
        panelClass: 'container-modal',
        data,
      });

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        const user = { ...response };
        delete user.id;
        if (!user.password.trim()) {
          delete user.password;
        }
        this.userUseCase
          .update(response.id, user)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((data: UserModel) =>
            this.loadDataByPage(this.pageCurrent)
          );
      } else {
        const user = { ...response };
        delete user.id;
        this.userUseCase
          .insert(user)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((data: UserModel) =>
            this.loadDataByPage(this.pageCurrent)
          );
      }
    });
  }

  delete(row: UserModel) {
    const obsResponse: Observable<string> = this.utilsService.confirm(
      '¿Está seguro de querer eliminar?'
    );

    obsResponse.subscribe((response) => {
      if (!response) {
        return;
      }

      this.userUseCase
        .delete(row.id)
        .pipe(takeUntil(this.obsFinish))
        .subscribe((data: UserModel) => {
          this.loadDataByPage(0);
        });
    });
  }

  download() {
    this.userUseCase
      .list()
      .pipe(takeUntil(this.obsFinish))
      .subscribe((response: UserModel[]) => {
        const dto = new DtoUserExport();
        this.utilsService.openSheet(
          response,
          dto,
          'Listado de usuarios',
          'usuarios'
        );
      });
  }

  ngOnDestroy() {
    this.obsFinish.next();
    this.obsFinish.complete();
  }
}
