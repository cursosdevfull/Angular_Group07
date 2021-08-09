import { Observable } from 'rxjs';
import { MedicModel } from '../domain/medic.model';
import { ResultPage } from './result-page.interface';

export abstract class MedicRepository {
  abstract getPage(page: number): Observable<ResultPage>;
  abstract delete(id: number): Observable<MedicModel>;
  abstract update(id: number, medic: FormData): Observable<MedicModel>;
  abstract list(): Observable<MedicModel[]>;
  abstract insert(medic: FormData): Observable<MedicModel>;
}
