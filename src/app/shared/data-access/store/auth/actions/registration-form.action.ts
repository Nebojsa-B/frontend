import { createAction, props } from "@ngrx/store";
import { RegistrationForm } from "../../../models/auth/LogIn";


export const registration = createAction(
  '[Auth] Registration',
  props<{ registrationForm: RegistrationForm }>()
);