import { DtoExport } from '../../shared/interfaces/dto-export.interface';
import { HistoryModel } from '../domain/history.model';

export interface IDtoHistoryExport {
  Paciente: string;
  Poliza: string;
  Contratante: string;
  Requerido: string;
  Edad: number;
  Sexo: string;
  Diagnóstico: string;
}

export class DtoHistoryExport
  implements DtoExport<HistoryModel, IDtoHistoryExport>
{
  mapping(data: HistoryModel[]): IDtoHistoryExport[] {
    return data.map((el: HistoryModel) => ({
      Paciente: `${el.nombre} ${el.apellido}`,
      Poliza: el.poliza,
      Contratante: el.contratante,
      Requerido: el.requerido,
      Edad: el.edad,
      Sexo: el.sexo === 1 ? 'Hombre' : 'Mujer',
      Diagnóstico: el.diagnostico,
    }));
  }
}
