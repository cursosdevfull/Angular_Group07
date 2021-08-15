import { Observable } from 'rxjs';
import { HistoryModel } from '../domain/history.model';
import { ResultPage } from './result-page.interface';

export abstract class HistoryRepository {
  abstract getPage(page: number): Observable<ResultPage>;
  abstract delete(id: number): Observable<HistoryModel>;
  abstract update(id: number, history: FormData): Observable<HistoryModel>;
  abstract list(): Observable<HistoryModel[]>;
  abstract insert(history: FormData): Observable<HistoryModel>;
}
