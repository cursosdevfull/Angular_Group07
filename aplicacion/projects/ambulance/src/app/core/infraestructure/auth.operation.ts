import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../domain/auth.interface';
import { environment } from '../../../environments/environment';
import { Token } from '../domain/token.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthRepository } from '../application/auth.repository';
import { mappingLogin } from '../application/auth-login.dto';

@Injectable()
export class AuthOperation extends AuthRepository {
  constructor(private readonly http: HttpClient, private router: Router) {
    super();
  }

  login(auth: Auth): Observable<Token> {
    return this.http
      .post<Token>(`${environment.pathAPI}/users/login`, auth)
      .pipe(
        map((el: any) => {
          return mappingLogin(el);
        })
      );
  }
}
