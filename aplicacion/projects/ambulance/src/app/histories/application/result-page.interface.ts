import { HistoryModel } from '../domain/history.model';

export interface ResultPage {
  records: HistoryModel | HistoryModel[];
  totalRecords: number;
}
