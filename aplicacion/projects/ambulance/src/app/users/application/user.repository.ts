import { Observable } from 'rxjs';
import { UserModel } from '../domain/user.model';
import { ResultPage } from './result-page.interface';

export abstract class UserRepository {
  abstract getPage(page: number): Observable<ResultPage>;
  abstract delete(id: number): Observable<UserModel>;
  abstract update(id: number, user: Partial<UserModel>): Observable<UserModel>;
  abstract list(): Observable<UserModel[]>;
  abstract insert(medic: Partial<UserModel>): Observable<UserModel>;
}
