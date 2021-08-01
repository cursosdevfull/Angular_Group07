import { MedicModel } from '../domain/medic.model';

export interface ResultPage {
  records: MedicModel | MedicModel[];
  totalRecords: number;
}
