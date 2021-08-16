import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidRepository } from './covid.repository';
import { CovidModel } from '../domain/covid.model';

@Injectable()
export class CovidUseCase {
  constructor(private readonly covidRepository: CovidRepository) {}

  getAll(): Observable<CovidModel[]> {
    return this.covidRepository.getAll();
  }
}
