import { Observable } from 'rxjs';

export abstract class DriverRepository {
  abstract getPage(page: number): Observable<any>;
}
