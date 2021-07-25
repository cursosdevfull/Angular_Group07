import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DriverRepository } from '../application/driver.repository';
import { ResultPage } from '../application/result-page.interface';
import { DriverModel } from '../domain/driver.model';
import { mappingDriverResponse } from './driver-response.dto.';
import { mappingDriver } from './driver.dto';

@Injectable()
export class DriversService extends DriverRepository {
  constructor(private http: HttpClient) {
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

  delete(id: number): Observable<DriverModel> {
    return this.http
      .delete<DriverModel>(`${environment.pathAPI}/drivers/${id}`)
      .pipe(
        map((el: any) => {
          return mappingDriver(el) as DriverModel;
        })
      );
  }

  update(id: number, driver: Partial<DriverModel>): Observable<DriverModel> {
    const driverResponse = mappingDriverResponse(driver);
    return this.http
      .put<DriverModel>(`${environment.pathAPI}/drivers/${id}`, driverResponse)
      .pipe(
        map((el: any) => {
          return mappingDriver(el) as DriverModel;
        })
      );
  }

  list(): Observable<DriverModel[]> {
    return this.http.get<DriverModel[]>(`${environment.pathAPI}/drivers`).pipe(
      map((el: any) => {
        return mappingDriver(el) as DriverModel[];
      })
    );
  }

  insert(driver: Partial<DriverModel>): Observable<DriverModel> {
    const driverResponse = mappingDriverResponse(driver);
    return this.http
      .post<DriverModel>(`${environment.pathAPI}/drivers`, driverResponse)
      .pipe(
        map((el: any) => {
          return mappingDriver(el) as DriverModel;
        })
      );
  }
}
