import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthUseCase } from '../../core/application/auth.usecase';

@Injectable()
export class AuthenticationGuard implements CanLoad {
  constructor(
    private readonly authUseCase: AuthUseCase,
    private readonly router: Router
  ) {}

  canLoad(): boolean {
    const status = this.authUseCase.getStatusUser();
    this.authUseCase.getRolesUser();

    if (!status) {
      this.router.navigate(['/']);
    }

    return status;
  }
}
