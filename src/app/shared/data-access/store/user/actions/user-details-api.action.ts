import { createAction, props } from "@ngrx/store";
import { UserDetails } from "../../../models/user/UserDetails";

export const loadUserDetailsSuccess = createAction(
  '[User Details] Load User Details Success',
  props<{ userDetails: UserDetails }>()
);

export const loadUserDetailsFail = createAction(
  '[User Details] Load User Details Fail',
  props<{ error: string }>()
);

export const updateUserPersonalDetailsSuccess = createAction(
  '[User Details] Update User Personal Details Success',
  props<{message: string}>()
);

export const updateUserPersonalDetailsFail = createAction(
  '[User Details] Update User Personal Details Fail',
  props<{ error: string }>()
);

export const updateUserLocationDetailsSuccess = createAction(
  '[Location Details] Update Location Details Success',
  props<{message: string}>()
);

export const updateUserLocationDetailsFail = createAction(
  '[Location Details] Update Location Fail',
  props<{ error: string }>()
);

export const updateUserFarmDetailsSuccess = createAction(
  '[Farm Details] Update Farm Details Success',
  props<{message: string}>()
);

export const updateUserFarmDetailsFail = createAction(
  '[Farm Details] Update Farm Details Fail',
  props<{ error: string }>()
);

export const addProductToFarmerSuccss = createAction(
  '[User Detail] Add Product to Farmer Success',
  props<{message: string}>()
);

export const addProductToFarmerFail = createAction(
  '[User Detail] Add Product to Farmer Fail',
  props<{error: string}>()
);