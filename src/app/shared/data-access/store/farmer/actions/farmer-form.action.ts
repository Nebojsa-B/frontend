import { createAction, props } from "@ngrx/store";
import { FarmerSave } from "../../../models/farmer/Farmer";



export const createFarmer = createAction(
  'Create Farmer',
  props<{ farmerDetails: FarmerSave }>()
);

export const viewFarmer = createAction(
  'View Farmer',
  props<{ farmerId: number }>()
);