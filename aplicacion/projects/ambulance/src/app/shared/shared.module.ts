import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { LockComponent } from './components/lock/lock.component';
import { UtilComponent } from './services/util/util.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DescargarComponent } from './components/descargar/descargar.component';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { PhotoComponent } from './components/photo/photo.component';
import { UploadDirective } from './directives/upload.directive';
import { WebcamModule } from 'ngx-webcam';
import { RolesAllowedDirective } from './directives/roles-allowed.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    KeypadComponent,
    LockComponent,
    UtilComponent,
    ConfirmComponent,
    DescargarComponent,
    PhotoComponent,
    UploadDirective,
    RolesAllowedDirective,
  ],
  imports: [
    WebcamModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule,
    MatSlideToggleModule,
    MatSnackBarModule,
  ],
  exports: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PerfectScrollbarModule,
    PaginatorComponent,
    KeypadComponent,
    LockComponent,
    MatDialogModule,
    ConfirmComponent,
    DescargarComponent,
    PhotoComponent,
    MatSnackBarModule,
    MatSelectModule,
    RolesAllowedDirective,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class SharedModule {}
