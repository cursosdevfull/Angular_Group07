import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HistoryRepository } from '../application/history.repository';
import { ResultPage } from '../application/result-page.interface';
import { HistoryModel } from '../domain/history.model';

@Injectable()
export class HistoriesService extends HistoryRepository {
  constructor(private http: HttpClient) {
    super();
  }

  getPage(page: number): Observable<ResultPage> {
    return this.http
      .get<ResultPage>(
        `${environment.pathAPI}/histories/page/${page}/${environment.pageSize}`
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

  delete(id: number): Observable<HistoryModel> {
    return this.http
      .delete<HistoryModel>(`${environment.pathAPI}/histories/${id}`)
      .pipe(
        map((el: any) => {
          return el as HistoryModel;
        })
      );
  }

  update(id: number, history: FormData): Observable<HistoryModel> {
    const historyResponse = history;
    return this.http
      .put<HistoryModel>(
        `${environment.pathAPI}/histories/${id}`,
        historyResponse
      )
      .pipe(
        map((el: any) => {
          return el as HistoryModel;
        })
      );
  }

  list(): Observable<HistoryModel[]> {
    return this.http
      .get<HistoryModel[]>(`${environment.pathAPI}/histories`)
      .pipe(
        map((el: any) => {
          return el as HistoryModel[];
        })
      );
  }

  insert(history: FormData): Observable<HistoryModel> {
    const historyResponse = history;
    return this.http
      .post<HistoryModel>(`${environment.pathAPI}/histories`, historyResponse)
      .pipe(
        map((el: any) => {
          return el as HistoryModel;
        })
      );
  }
}
