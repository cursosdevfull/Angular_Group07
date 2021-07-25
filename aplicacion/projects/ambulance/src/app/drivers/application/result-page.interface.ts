import { DriverModel } from '../domain/driver.model';

export interface ResultPage {
  records: DriverModel | DriverModel[];
  totalRecords: number;
}
