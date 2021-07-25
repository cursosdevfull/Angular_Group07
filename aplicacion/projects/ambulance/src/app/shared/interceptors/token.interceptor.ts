import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUseCase } from '../../core/application/auth.usecase';

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

    return next.handle(requestCloned);
  }
}
