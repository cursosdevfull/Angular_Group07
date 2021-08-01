import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Auth } from '../domain/auth.interface';
import { Token } from '../domain/token.interface';
import { AuthRepository } from './auth.repository';
import { StorageRepository } from './storage.repository';

@Injectable({ providedIn: 'root' })
export class AuthUseCase {
  constructor(
    private authRepository: AuthRepository,
    private storageRepository: StorageRepository,
    private router: Router
  ) {}

  login(auth: Auth): Observable<Token> {
    return this.authRepository.login(auth);
  }

  logout(): Observable<any> {
    this.storageRepository.clear();
    this.router.navigate(['/']); // http://localhost:4200

    return of();
  }

  setStorage(nameProperty: string, value: string) {
    this.storageRepository.setStorage(nameProperty, value);
  }

  getStorage(nameProperty: string): string | null {
    return this.storageRepository.getStorage(nameProperty);
  }

  clear() {
    this.storageRepository.clear();
  }

  getStatusUser(): boolean {
    return !!this.storageRepository.getStorage('accessToken');
  }

  getFieldInToken(fieldName: string): string | null {
    return this.storageRepository.getFieldInToken(fieldName);
  }

  getNewAccessToken(refreshToken: string): Observable<Token> {
    return this.authRepository.getNewAccessToken(refreshToken);
  }
}
