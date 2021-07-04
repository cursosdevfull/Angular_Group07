<<<<<<< HEAD
import { ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  MatColumnDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
=======
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
>>>>>>> 0412c8e8478cb5631aad3d0c606410e4a9235dd7
import { MetaDataColumn } from '../../interfaces/medatacolum.interface';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() metaDataColumns: MetaDataColumn[] = [];
<<<<<<< HEAD
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
=======
>>>>>>> 0412c8e8478cb5631aad3d0c606410e4a9235dd7
  dataSource: any;
  listFields: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listFields = this.metaDataColumns.map((el) => el.field);
    this.loadData();
  }

  loadData() {
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

  ngAfterContentInit() {
    if (!this.columnsDef) {
      return;
    }
    this.columnsDef.forEach((columnDef) => this.table?.addColumnDef(columnDef));
    this.listFields.push('actions');
  }
}
