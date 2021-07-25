import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverModel } from '../domain/driver.model';
import { DriverRepository } from './driver.repository';
import { ResultPage } from './result-page.interface';

@Injectable()
export class DriverUseCase {
  constructor(private readonly driverRepository: DriverRepository) {}

  list(): Observable<DriverModel[]> {
    return this.driverRepository.list();
  }

  getPage(page: number): Observable<ResultPage> {
    return this.driverRepository.getPage(page);
  }

  update(id: number, driver: Partial<DriverModel>): Observable<DriverModel> {
    return this.driverRepository.update(id, driver);
  }

  delete(id: number): Observable<DriverModel> {
    return this.driverRepository.delete(id);
  }

  insert(driver: Partial<DriverModel>): Observable<DriverModel> {
    return this.driverRepository.insert(driver);
  }
}
