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
import { StorageRepository } from '../application/storage.repository';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthOperation extends AuthRepository {
  constructor(
    private readonly http: HttpClient,
    private router: Router,
    private readonly storage: StorageRepository
  ) {
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

  getNewAccessToken(refreshToken: string): Observable<Token> {
    return this.http.get<Token>(
      `${environment.pathAPI}/users/refresh/${refreshToken}`
    );
  }

  getRolesUser(): string[] {
    const roles = this.storage.getFieldInToken('roles');
    return roles;
  }
}
