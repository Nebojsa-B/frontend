import { createAction, props } from "@ngrx/store";
import { Farmer } from "../../../models/farmer/Farmer";

export const loadFarmerSuccess = createAction(
  '[Farmer] Load Farmer List Success',
  props<{farmers: Farmer[]}>()
);

export const loadFarmerFail = createAction(
  '[Farmer] Load Farmer Fail',
  props<{error: string}>()
);