import { DtoExport } from '../../shared/interfaces/dto-export.interface';
import { DriverModel } from '../domain/driver.model';

export interface IDtoDriverExport {
  'Nombre del piloto': string;
}

export class DtoDriverExport
  implements DtoExport<DriverModel, IDtoDriverExport>
{
  mapping(data: DriverModel[]): IDtoDriverExport[] {
    return data.map((el: DriverModel) => ({ 'Nombre del piloto': el.name }));
  }
}
