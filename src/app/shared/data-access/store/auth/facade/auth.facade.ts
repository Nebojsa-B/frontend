import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';

import * as Actions from '../actions';
import * as AuthSelectors from '../selectors';
import { LoginForm, LoginResponse, RegistrationForm } from '../../../models/auth/LogIn';
import { map, Observable } from 'rxjs';
import { ofType } from '@ngrx/effects';

@Injectable({providedIn: 'root'})
export class AuthFacade {
  selectLoginResponse$ = this.store.pipe(
    select(AuthSelectors.AuthInformations.selectLoginResponseData)
  );

  selectUserLoginResponse$ = this.store.pipe(
    select(AuthSelectors.AuthInformations.selectUserLoginResponse)
  );

  selectAccessToken$ = this.store.pipe(
    select(AuthSelectors.AuthInformations.selectAccessToken)
  );

  selectEmail$ = this.store.pipe(
    select(AuthSelectors.AuthInformations.selectEmail)
  );

  selectedError$ = this.store.pipe(
    select(AuthSelectors.AuthInformations.selectError)
  );

  selectIsInitializing$ = this.store.pipe(
    select(AuthSelectors.AuthInformations.selectIsInitializing)
  );

  Actions = Actions;

  constructor(
    private readonly store: Store,
    private readonly actionsListener$: ActionsSubject
  ) {}

  login(loginForm: LoginForm) {
    this.store.dispatch(Actions.Auth.login({ loginForm }));
  }

  signUp(registrationForm: RegistrationForm){
    this.store.dispatch(Actions.Registration.registration({registrationForm}));
  }

  signOut(){
    this.store.dispatch(Actions.Auth.signOut());
  }


  signOutSuccessAction() {
    return this.actionsListener$
      .pipe(ofType(Actions.AuthApi.signOutSuccess))
  }

  loginSuccessAction(): Observable<LoginResponse> {
    return this.actionsListener$
      .pipe(ofType(Actions.AuthApi.loginSuccess))
      .pipe(map(({ loginResponse }) => loginResponse));
  }

  registrationSuccessAction(): Observable<LoginResponse> {
    return this.actionsListener$.pipe(
      ofType(Actions.RegistrationApi.registrationSuccess))
      .pipe(map(({registrationResponse}) => registrationResponse))
  }

  registrationFailAction(): Observable<any> {
    return this.actionsListener$.pipe(
      ofType(Actions.RegistrationApi.registrationFail))
      .pipe(map(({error}) => error) )
  }

  isLoggedIn() {
    this.store.dispatch(Actions.Auth.isLoggedIn());
  }
}