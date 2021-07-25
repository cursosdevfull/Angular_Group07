import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUseCase } from '../../core/application/auth.usecase';
import { DriverRepository } from '../application/driver.repository';
import { ResultPage } from '../application/result-page.interface';
import { mappingDriver } from './driver.dto';

@Injectable({
  providedIn: 'root',
})
export class DriversService extends DriverRepository {
  constructor(
    private http: HttpClient,
    private readonly authUseCase: AuthUseCase
  ) {
    super();
  }

  getPage(page: number): Observable<ResultPage> {
    return this.http
      .get<ResultPage>(
        `${environment.pathAPI}/drivers/page/${page}/${environment.pageSize}`
      )
      .pipe(
        map((el: any) => {
          const { records, totalRecords } = el;
          return {
            records: mappingDriver(records),
            totalRecords,
          };
        })
      );
  }
}
