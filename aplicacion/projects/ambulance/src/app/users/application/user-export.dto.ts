import { DtoExport } from '../../shared/interfaces/dto-export.interface';
import { UserModel } from '../domain/user.model';

export interface IDtoUserExport {
  'Nombre Completo': string;
  'Correo electrónico': string;
}

export class DtoUserExport implements DtoExport<UserModel, IDtoUserExport> {
  mapping(data: UserModel[]): IDtoUserExport[] {
    return data.map((el: UserModel) => ({
      'Nombre Completo': el.nombre,
      'Correo electrónico': el.correo,
    }));
  }
}
