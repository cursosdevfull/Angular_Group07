import { ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  MatColumnDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { MetaDataColumn } from '../../interfaces/medatacolum.interface';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() metaDataColumns: MetaDataColumn[] = [];
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  dataSource: any;
  listFields: string[] = [];

  constructor() {}

  ngOnChanges() {
    this.loadData();
  }

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
    this.columnsDef.forEach((columnDef) => {
      this.listFields.push(columnDef.name);
      this.table?.addColumnDef(columnDef);
    });
  }
}
