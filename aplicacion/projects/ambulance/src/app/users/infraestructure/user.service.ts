import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRepository } from '../application/user.repository';
import { ResultPage } from '../application/result-page.interface';
import { UserModel } from '../domain/user.model';

@Injectable()
export class UsersService extends UserRepository {
  constructor(private http: HttpClient) {
    super();
  }

  getPage(page: number): Observable<ResultPage> {
    return this.http
      .get<ResultPage>(
        `${environment.pathAPI}/users/page/${page}/${environment.pageSize}`
      )
      .pipe(
        map((el: any) => {
          const { records, totalRecords } = el;
          return {
            records,
            totalRecords,
          };
        })
      );
  }

  delete(id: number): Observable<UserModel> {
    return this.http
      .delete<UserModel>(`${environment.pathAPI}/users/${id}`)
      .pipe(
        map((el: any) => {
          return el as UserModel;
        })
      );
  }

  update(id: number, user: Partial<UserModel>): Observable<UserModel> {
    const userResponse = user;
    return this.http
      .put<UserModel>(`${environment.pathAPI}/users/${id}`, userResponse)
      .pipe(
        map((el: any) => {
          return el as UserModel;
        })
      );
  }

  list(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.pathAPI}/users`).pipe(
      map((el: any) => {
        return el as UserModel[];
      })
    );
  }

  insert(user: Partial<UserModel>): Observable<UserModel> {
    const userResponse = user;
    return this.http
      .post<UserModel>(`${environment.pathAPI}/users`, userResponse)
      .pipe(
        map((el: any) => {
          return el as UserModel;
        })
      );
  }
}
