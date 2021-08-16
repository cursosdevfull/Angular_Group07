import { Component, OnInit } from '@angular/core';
import { SocketUseCase } from '../application/socket.usecase';
import { Entity } from '../domain/entity';

@Component({
  selector: 'amb-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css'],
})
export class SocketComponent implements OnInit {
  results: Entity[] = [];
  view: any = [400, 300];
  scheme = {
    domain: ['#0d47a1', '#42a5f5', '#90caf9', '#adbdca'],
  };
  legend = true;
  legendPosition = 'above';
  legendTitle = 'Vacunas';
  gradient = true;
  doughnut = true;

  constructor(private readonly socketUseCase: SocketUseCase) {}

  ngOnInit(): void {
    this.socketUseCase
      .listen('dataupdate')
      .subscribe((results) => (this.results = results));
  }
}
