import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CovidRepository } from '../application/covid.repository';
import { CovidModel } from '../domain/covid.model';

@Injectable()
export class CovidOperation extends CovidRepository {
  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<CovidModel[]> {
    return this.http
      .get<CovidModel[]>('https://covid19.mathdro.id/api/confirmed')
      .pipe(map((data) => data.slice(0, 30)));
  }
}
