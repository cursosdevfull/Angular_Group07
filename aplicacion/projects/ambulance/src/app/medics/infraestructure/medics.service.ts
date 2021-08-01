import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MedicRepository } from '../application/medic.repository';
import { ResultPage } from '../application/result-page.interface';
import { MedicModel } from '../domain/medic.model';

@Injectable()
export class MedicsService extends MedicRepository {
  constructor(private http: HttpClient) {
    super();
  }

  getPage(page: number): Observable<ResultPage> {
    return this.http
      .get<ResultPage>(
        `${environment.pathAPI}/medics/page/${page}/${environment.pageSize}`
      )
      .pipe(
        map((el: any) => {
          const { records, totalRecords } = el;
          return {
            records,
            totalRecords,
          };
        })
      );
  }

  delete(id: number): Observable<MedicModel> {
    return this.http
      .delete<MedicModel>(`${environment.pathAPI}/medics/${id}`)
      .pipe(
        map((el: any) => {
          return el as MedicModel;
        })
      );
  }

  update(id: number, medic: Partial<MedicModel>): Observable<MedicModel> {
    const medicResponse = medic;
    return this.http
      .put<MedicModel>(`${environment.pathAPI}/medics/${id}`, medicResponse)
      .pipe(
        map((el: any) => {
          return el as MedicModel;
        })
      );
  }

  list(): Observable<MedicModel[]> {
    return this.http.get<MedicModel[]>(`${environment.pathAPI}/medics`).pipe(
      map((el: any) => {
        return el as MedicModel[];
      })
    );
  }

  insert(medic: Partial<MedicModel>): Observable<MedicModel> {
    const medicResponse = medic;
    return this.http
      .post<MedicModel>(`${environment.pathAPI}/medics`, medicResponse)
      .pipe(
        map((el: any) => {
          return el as MedicModel;
        })
      );
  }
}
