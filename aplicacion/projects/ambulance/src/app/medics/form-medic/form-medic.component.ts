import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicModel } from '../domain/medic.model';

@Component({
  selector: 'amb-form-medic',
  templateUrl: './form-medic.component.html',
  styleUrls: ['./form-medic.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormMedicComponent implements OnInit {
  title!: string;
  group!: FormGroup;
  photoToShow!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: MedicModel,
    private formBuilder: FormBuilder,
    private readonly reference: MatDialogRef<FormMedicComponent>
  ) {
    this.title = data ? 'Edición' : 'Nuevo';
    this.setForm();
  }

  setForm() {
    this.group = this.formBuilder.group({
      id: [this.data?.id],
      nombre: [this.data?.nombre, Validators.required],
      segundo_nombre: [this.data?.segundo_nombre, Validators.required],
      apellido: [this.data?.apellido, Validators.required],
      cmp: [this.data?.cmp, Validators.required],
      dni: [this.data?.dni, Validators.required],
      correo: [this.data?.correo, Validators.required],
    });

    if (this.data) {
      this.group.addControl('foto', new FormControl(null));
      if (this.data.foto) {
        this.photoToShow = this.data.foto;
      }
    } else {
      this.group.addControl('foto', new FormControl(null, Validators.required));
    }
  }

  ngOnInit(): void {}

  save() {
    const record = this.group.value;
    const id = record.id;

    delete record.id;

    const formData = new FormData();
    for (const key of Object.keys(record)) {
      const value = record[key];
      formData.append(key, value);
    }
    this.reference.close({ id, medic: formData });
  }
}
