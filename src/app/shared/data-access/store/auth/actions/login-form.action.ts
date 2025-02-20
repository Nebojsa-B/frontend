import { createAction, props } from "@ngrx/store";
import { LoginForm } from "../../../models/auth/LogIn";

export const login = createAction(
  '[Auth] Login',
  props<{ loginForm: LoginForm }>()
);

export const isLoggedIn = createAction(
  '[Auth] User Information If User Is Logged In'
);

export const signOut = createAction(
  '[Auth] Sign Out'
);
