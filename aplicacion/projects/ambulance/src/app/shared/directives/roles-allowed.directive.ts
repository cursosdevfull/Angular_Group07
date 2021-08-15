import { ViewContainerRef, TemplateRef, Directive, Input } from '@angular/core';
import { AuthUseCase } from '../../core/application/auth.usecase';

@Directive({
  selector: '[roles-allowed]',
})
export class RolesAllowedDirective {
  @Input('roles-allowed') rolesAllowed: string[] = [];
  hasView = false;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly authUseCase: AuthUseCase
  ) {}

  ngOnInit() {
    this.execute();
  }

  execute() {
    const isUserLogged = this.authUseCase.getStatusUser();
    const rolesUser = this.authUseCase.getRolesUser();

    const lengthRolesAllowed = this.rolesAllowed.length;
    let userAuthorized = false;
    for (let ind = 0; ind < lengthRolesAllowed; ind++) {
      if (rolesUser.indexOf(this.rolesAllowed[ind]) > -1) {
        userAuthorized = true;
        break;
      }
    }
    if (isUserLogged && userAuthorized && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
}
