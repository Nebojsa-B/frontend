import { createAction, props } from "@ngrx/store";
import { LoginResponse } from "../../../models/auth/LogIn";


export const registrationSuccess = createAction(
  '[Auth/API] Registration Success',
  props<{ registrationResponse: LoginResponse }>()
);

export const registrationFail = createAction(
  '[Auth/API] Registration Fail',
  props<{ error: string }>()
);