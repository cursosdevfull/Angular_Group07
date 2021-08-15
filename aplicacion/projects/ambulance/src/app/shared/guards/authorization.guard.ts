import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUseCase } from '../../core/application/auth.usecase';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private authUseCase: AuthUseCase,
    private utilsService: UtilsService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const rolesAllowed = route.data?.rolesAllowed;
    const rolesUser = this.authUseCase.getRolesUser();

    const lengthRolesAllowed = rolesAllowed.length;
    let userAuthorized = false;
    for (let ind = 0; ind < lengthRolesAllowed; ind++) {
      if (rolesUser.indexOf(rolesAllowed[ind]) > -1) {
        userAuthorized = true;
        break;
      }
    }

    if (!userAuthorized) {
      this.utilsService.notifier('No tiene permisos para este módulo');
    }

    return userAuthorized;
  }
}
