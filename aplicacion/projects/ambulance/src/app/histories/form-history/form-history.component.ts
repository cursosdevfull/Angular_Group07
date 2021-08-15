import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HistoryModel } from '../domain/history.model';

@Component({
  selector: 'amb-form-history',
  templateUrl: './form-history.component.html',
  styleUrls: ['./form-history.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormHistoryComponent implements OnInit {
  title!: string;
  group!: FormGroup;
  photoToShow!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: HistoryModel,
    private formBuilder: FormBuilder,
    private readonly reference: MatDialogRef<FormHistoryComponent>
  ) {
    this.title = data ? 'Edición' : 'Nuevo';
    this.setForm();
  }

  setForm() {
    this.group = this.formBuilder.group({
      id: [this.data?.id],
      contratante: [this.data?.contratante, Validators.required],
      requerido: [this.data?.requerido, Validators.required],
      poliza: [this.data?.poliza, Validators.required],
      dni: [this.data?.dni, Validators.required],
      nombre: [this.data?.nombre, Validators.required],
      apellido: [this.data?.apellido, Validators.required],
      telefono: [this.data?.telefono, Validators.required],
      edad: [this.data?.edad, Validators.required],
      sexo: [this.data?.sexo, Validators.required],
      diagnostico: [this.data?.diagnostico, Validators.required],
      sintomas: [this.data?.sintomas, Validators.required],
      tratamiento: [this.data?.tratamiento, Validators.required],
      medico: [this.data?.medico, Validators.required],
    });
  }

  ngOnInit(): void {}

  save() {
    const record = this.group.value;
    this.reference.close(record);
  }
}
