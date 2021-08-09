import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from '../domain/user.model';

@Component({
  selector: 'amb-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormUserComponent implements OnInit {
  title!: string;
  group!: FormGroup;
  roles = [
    { id: 1, name: 'ADMIN' },
    { id: 2, name: 'OPERATOR' },
    { id: 3, name: 'MEDIC' },
  ];

  constructor(
    private readonly reference: MatDialogRef<FormUserComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: UserModel
  ) {
    this.title = data ? 'EDICIÓN' : 'NUEVO';
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, Validators.required),
      correo: new FormControl(this.data?.correo, [
        Validators.required,
        Validators.email,
      ]),
      roles: new FormControl(this.data?.roles.map((r: any) => r.id)),
    });

    if (this.data) {
      this.group.addControl('password', new FormControl(''));
    } else {
      this.group.addControl(
        'password',
        new FormControl('', Validators.required)
      );
    }
  }

  save() {
    const record = this.group.value;
    this.reference.close(record);
  }
}
