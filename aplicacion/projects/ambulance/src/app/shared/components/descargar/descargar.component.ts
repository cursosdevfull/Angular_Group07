import { Component, Inject, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { OptionsExport } from '../../interfaces/options-export.interface';

@Component({
  selector: 'amb-descargar',
  templateUrl: './descargar.component.html',
  styleUrls: ['./descargar.component.css'],
})
export class DescargarComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: OptionsExport,
    private reference: MatBottomSheetRef<DescargarComponent>
  ) {}

  ngOnInit(): void {}

  export(event: any, option: string, action: string = '') {
    event.preventDefault();
  }
}
