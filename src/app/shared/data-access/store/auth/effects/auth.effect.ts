import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Auth, AuthApi, Registration, RegistrationApi } from "../actions";
import { AuthService } from "../../../services/auth.service";

@Injectable()
export class AuthEffect {
  $login = createEffect(() =>
    this.actions$.pipe(
      ofType(Auth.login),
      switchMap(({ loginForm }) =>
        this.authService.signIn(loginForm).pipe(
          map((loginResponse) => AuthApi.loginSuccess({ loginResponse }))
          ,
          catchError((error) => {
            return of(AuthApi.loginFail({ error }));
          })
        )
      )
    )
  );

  $signOut = createEffect(() =>
    this.actions$.pipe(
      ofType(Auth.signOut),
      switchMap(() =>
        this.authService.signOut().pipe(
          map(() => AuthApi.signOutSuccess())
          ,
          catchError((error) => {
            return of(AuthApi.signOutFail({ error }));
          })
        )
      )
    )
  );

  $registration = createEffect(() =>
    this.actions$.pipe(
      ofType(Registration.registration),
      switchMap(({ registrationForm }) =>
        this.authService.signUp(registrationForm).pipe(
          map((registrationResponse) => RegistrationApi.registrationSuccess({ registrationResponse }))
          ,
          catchError((error) => {
            return of(RegistrationApi.registrationFail({ error }));
          })
        )
      )
    )
  );

  $isLoggedIn = createEffect(() =>
    this.actions$.pipe(
      ofType(Auth.isLoggedIn),
      switchMap(() =>
        this.authService.isLoggedIn().pipe(
          map((loginResponse) => AuthApi.isLoggedInSuccess({ loginResponse })),
          catchError((error) => {
            return of(AuthApi.isLoggedInFail({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}