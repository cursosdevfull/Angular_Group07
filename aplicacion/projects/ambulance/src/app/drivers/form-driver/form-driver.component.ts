import { Inject } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) private data: any,
    private readonly reference: MatDialogRef<FormDriverComponent>
  ) {
    this.title = data ? 'EDICIÓN' : 'NUEVO';
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    console.log(this.data);
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, Validators.required),
    });
  }

  save() {
    const record = this.group.value;
    this.reference.close(record);
  }
}
