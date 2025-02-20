import { createAction, props } from "@ngrx/store";
import { UserDetails } from "../../../models/user/UserDetails";

export const loadUserListSuccess = createAction(
  '[User List] Load User List Success',
  props<{ users: UserDetails[] }>()
);

export const loadUserListFail = createAction(
  '[User List] Load User List Fail',
  props<{ error: string }>()
);