import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../domain/auth.interface';
import { Token } from '../domain/token.interface';
import { AuthRepository } from './auth.repository';
import { StorageRepository } from './storage.repository';

@Injectable({ providedIn: 'root' })
export class AuthUseCase {
  constructor(
    private authRepository: AuthRepository,
    private storageRepository: StorageRepository
  ) {}

  login(auth: Auth): Observable<Token> {
    return this.authRepository.login(auth);
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
}
