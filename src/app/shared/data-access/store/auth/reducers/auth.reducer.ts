import { createReducer, on } from '@ngrx/store';
import { AuthApi, Auth, Registration, RegistrationApi, } from '../actions';
import { LoginResponse } from '../../../models/auth/LogIn';

export const authFeatureKey = 'auth';

export interface AuthState {
  email: string | null;
  loginResponse: LoginResponse | null;
  error: string | null;
  isInitializing: boolean;
}

export const initialState: AuthState = {
  email: null,
  loginResponse: null,
  error: null,
  isInitializing: false
};

export const reducer = createReducer(
  initialState,
  on(Auth.login, (state, { loginForm }) => {
    return {
      ...state,
      email: loginForm.email,
    };
  }),
  on(Registration.registration, (state, { registrationForm }) => {
    return {
      ...state,
      email: registrationForm.email,
    };
  }),
  on(RegistrationApi.registrationSuccess, (state, { registrationResponse }) => {
    return {
      ...state,
      loginResponse: registrationResponse,
      error: null,
    };
  }),
  on(RegistrationApi.registrationFail, (state, action) => {
    return {
      ...initialState,
      error: action.error,
    };
  }),
  on(AuthApi.loginSuccess, (state, { loginResponse }) => {
    return {
      ...state,
      loginResponse,
      error: null,
    };
  }),
  on(AuthApi.loginFail, (state, action) => {
    return {
      ...initialState,
      error: action.error,
    };
  }),
  on(Auth.isLoggedIn, (state) => {
    return {
      ...state,
      isInitializing: true,
    };
  }),
  on(AuthApi.isLoggedInSuccess, (state, { loginResponse }) => {
    return {
      ...state,
      loginResponse,
      error: null,
      isInitializing: false,
    };
  }),
  on(AuthApi.isLoggedInFail, () => {
    return {
      ...initialState,
      error: null,
      isInitializing: false,
    };
  }),
)

export const getLoginResponse = (state: AuthState) => state.loginResponse;

export const getUserLoginResponse = (state: AuthState) => {
  if(!state.loginResponse) return null;
  return state.loginResponse.user
};

export const getEmail = (state: AuthState) => state.email;

export const getAccessToken = (state: AuthState) =>
  state.loginResponse ? state.loginResponse.accessToken : null;

export const getError = (state: AuthState) => state.error;

export const getInitializing = (state: AuthState) => state.isInitializing;