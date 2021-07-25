import { Inject } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DriverModel } from '../domain/driver.model';

@Component({
  selector: 'amb-form-driver',
  templateUrl: './form-driver.component.html',
  styleUrls: ['./form-driver.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormDriverComponent implements OnInit {
  title!: string;
  group!: FormGroup;

  constructor(
    private readonly reference: MatDialogRef<FormDriverComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: DriverModel
  ) {
    this.title = data ? 'EDICIÓN' : 'NUEVO';
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      name: new FormControl(this.data?.name, Validators.required),
    });
  }

  save() {
    const record = this.group.value;
    this.reference.close(record);
  }
}
