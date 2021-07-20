import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../domain/auth.interface';
import { environment } from '../../../environments/environment';
import { Token } from '../domain/token.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthRepository } from '../application/auth.repository';

@Injectable()
export class AuthOperation extends AuthRepository {
  constructor(private readonly http: HttpClient, private router: Router) {
    super();
  }

  login(auth: Auth): Observable<Token> {
    /*     const data = (response: Token) => {
     
    };
    const error = (error: any) => console.log(error); */
    //const complete = () => console.log("Se completó")

    return this.http.post<Token>(`${environment.pathAPI}/users/login`, auth);
    //.subscribe(data, error);
  }
}
