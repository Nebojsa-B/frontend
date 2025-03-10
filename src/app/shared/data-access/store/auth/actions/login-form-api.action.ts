import { createAction, createActionGroup, props } from "@ngrx/store";
import { LoginResponse } from "../../../models/auth/LogIn";

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ loginResponse: LoginResponse }>()
);

export const loginFail = createAction(
  '[Auth/API] Login Fail',
  props<{ error: string | string[] }>()
);

export const isLoggedInSuccess = createAction(
  '[Auth/API] User Information If User Is Logged In Success',
  props<{ loginResponse: LoginResponse }>()
);

export const isLoggedInFail = createAction(
  '[Auth/API] User Information If User Is Logged In Fail',
  props<{ error: string }>()
);

export const signOutSuccess = createAction(
  '[Auth/API] Sign Out Success'
);

export const signOutFail = createAction(
  '[Auth/API] Sign Out Fail',
  props<{error: string}>()
);