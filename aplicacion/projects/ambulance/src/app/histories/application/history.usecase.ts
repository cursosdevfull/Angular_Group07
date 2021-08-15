import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryModel } from '../domain/history.model';
import { HistoryRepository } from './history.repository';
import { ResultPage } from './result-page.interface';

@Injectable()
export class HistoryUseCase {
  constructor(private readonly historyRepository: HistoryRepository) {}

  list(): Observable<HistoryModel[]> {
    return this.historyRepository.list();
  }

  getPage(page: number): Observable<ResultPage> {
    return this.historyRepository.getPage(page);
  }

  update(id: number, history: FormData): Observable<HistoryModel> {
    return this.historyRepository.update(id, history);
  }

  delete(id: number): Observable<HistoryModel> {
    return this.historyRepository.delete(id);
  }

  insert(history: FormData): Observable<HistoryModel> {
    return this.historyRepository.insert(history);
  }
}
