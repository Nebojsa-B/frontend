import { createAction, props } from "@ngrx/store";
import { Farmer, FarmerSave } from "../../../models/farmer/Farmer";

export const createFormSuccess = createAction(
  'Create Farmer Success',
  props<{farmerDetails: FarmerSave}>()
)

export const createFarmerFail = createAction(
  'Create Farmer Fail',
  props<{error: string}>()
);

export const viewFarmerSuccess = createAction(
  'View Farmer Success',
  props<{farmer: Farmer}>()
);

export const viewFarmerFail = createAction(
  'View Farmer Fail',
  props<{error: string}>()
);