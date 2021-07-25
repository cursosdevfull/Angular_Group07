import { Observable } from 'rxjs';
import { DriverModel } from '../domain/driver.model';
import { ResultPage } from './result-page.interface';

export abstract class DriverRepository {
  abstract getPage(page: number): Observable<ResultPage>;
  abstract delete(id: number): Observable<DriverModel>;
  abstract update(
    id: number,
    driver: Partial<DriverModel>
  ): Observable<DriverModel>;
  abstract list(): Observable<DriverModel[]>;
  abstract insert(driver: Partial<DriverModel>): Observable<DriverModel>;
}
