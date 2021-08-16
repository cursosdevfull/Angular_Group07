import { Component, OnInit } from '@angular/core';
import { CovidUseCase } from '../application/covid.usecase';
import { CovidModel } from '../domain/covid.model';
import { Entity } from '../domain/entity';

@Component({
  selector: 'amb-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
})
export class CovidComponent implements OnInit {
  dataCovid: Entity[] = [];

  view: any = [700, 450];
  scheme = {
    domain: ['#0d47a1', '#42a5f5', '#90caf9', '#adbdca'],
  };
  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Países';
  yAxisLabel = 'Cantidad de contagiados';
  yScaleMin = 0;
  yScaleMax = 2500;
  showGridLines = true;
  legend = true;
  legendPosition = ['right', 'below'];
  legendTitle = '';

  constructor(private readonly covidUseCase: CovidUseCase) {}

  ngOnInit(): void {
    this.covidUseCase.getAll().subscribe((data: CovidModel[]) => {
      this.dataCovid = data.map((el) => ({
        name: el.countryRegion,
        value: el.confirmed,
      }));
    });
  }
}
