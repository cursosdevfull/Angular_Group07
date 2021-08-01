import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, mergeMap, retry } from 'rxjs/operators';
import { AuthUseCase } from '../../core/application/auth.usecase';
import { Token } from '../../core/domain/token.interface';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private readonly injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/users/login')) {
      return next.handle(req);
    }
    const authUseCase = this.injector.get(AuthUseCase);
    const accessToken = authUseCase.getStorage('accessToken');

    const requestCloned = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(requestCloned).pipe(
      catchError((error: HttpErrorResponse) => {
        if (!(error.error instanceof ErrorEvent) && error.status === 409) {
          const refreshToken = authUseCase.getStorage('refreshToken');
          return authUseCase.getNewAccessToken(refreshToken || '').pipe(
            retry(3),
            mergeMap((response: Token) => {
              authUseCase.setStorage('accessToken', response.accessToken);

              const newRequestClone = req.clone({
                headers: req.headers.append(
                  'Authorization',
                  `Bearer ${response.accessToken}`
                ),
              });

              return next.handle(newRequestClone);
            })
          );
        } else if (error.status === 401) {
          return authUseCase.logout();
        } else {
          if (error.error && error.error.result) {
            return throwError(error.error.result);
          } else {
            return throwError(error);
          }
        }
      })
    );
  }
}
