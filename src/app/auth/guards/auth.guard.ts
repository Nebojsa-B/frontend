import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthFacade } from '../../shared/data-access/store/auth/facade/auth.facade';
import { Observable, map, of, skipWhile, take, withLatestFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    public router: Router,
    private authFacade: AuthFacade
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authFacade.selectIsInitializing$.pipe(
      skipWhile((isInit) => isInit),
      withLatestFrom(this.authFacade.selectAccessToken$),
      map(([, accessToken]) => {
        if (accessToken) return true;

        this.router.navigateByUrl('auth/login');

        return false;
      }),
      take(1)
    );
  }

  canActivateChild(): Observable<boolean | UrlTree> {
    return this.authFacade.selectIsInitializing$.pipe(
      skipWhile((isInit) => isInit),
      withLatestFrom(this.authFacade.selectAccessToken$),
      map(([, accessToken]) => {
        if (accessToken) return true;

        this.router.navigateByUrl('auth/login');

        return false;
      }),
      take(1)
    );
  }
}
