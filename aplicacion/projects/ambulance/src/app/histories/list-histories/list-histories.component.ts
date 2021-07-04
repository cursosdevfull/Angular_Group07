import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../shared/interfaces/medatacolum.interface';

@Component({
  selector: 'amb-list-histories',
  templateUrl: './list-histories.component.html',
  styleUrls: ['./list-histories.component.css'],
})
export class ListHistoriesComponent implements OnInit {
  data: any = [
    {
      id: 1,
      nombrePaciente: 'Jorge Atala',
      nombreMedico: 'Javier Acosta',
      fecha: new Date(),
    },
    {
      id: 2,
      nombrePaciente: 'Fernanda Campos',
      nombreMedico: 'Carmen Zevallos',
      fecha: new Date(),
    },
    {
      id: 3,
      nombrePaciente: 'Raúl Caravaglia',
      nombreMedico: 'Pedro Bayeto',
      fecha: new Date(),
    },
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombreMedico', title: 'Nombre del Médico' },
    { field: 'nombrePaciente', title: 'Nombre Completo del Paciente' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
