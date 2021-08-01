import { DtoExport } from '../../shared/interfaces/dto-export.interface';
import { MedicModel } from '../domain/medic.model';

export interface IDtoMedicExport {
  Nombre: string;
  'Segundo Nombre': string;
  'Registro médico': string;
  DNI: string;
  Correo: string;
}

export class DtoMedicExport implements DtoExport<MedicModel, IDtoMedicExport> {
  mapping(data: MedicModel[]): IDtoMedicExport[] {
    return data.map((el: MedicModel) => ({
      Nombre: el.nombre,
      'Segundo Nombre': el.segundo_nombre,
      'Registro médico': el.cmp,
      DNI: el.dni,
      Correo: el.correo,
    }));
  }
}
