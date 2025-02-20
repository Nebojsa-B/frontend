import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { AuthFacade } from "../../shared/data-access/store/auth/facade/auth.facade";
import { map, Observable, skipWhile, take, withLatestFrom } from "rxjs";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private authFacade: AuthFacade,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authFacade.selectIsInitializing$.pipe(
      skipWhile((isInit) => isInit),
      withLatestFrom(this.authFacade.selectAccessToken$),
      map(([, accessToken]) => {
        if (!accessToken) return true;

        this.router.navigateByUrl('dashboard');
        return false;
      }),
      take(1)
    );
  }
}