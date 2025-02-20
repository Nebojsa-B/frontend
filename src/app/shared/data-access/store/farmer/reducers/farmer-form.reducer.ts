import { createReducer, on } from "@ngrx/store";
import { FarmerSave } from "../../../models/farmer/Farmer";
import { FarmerForm, FarmerFormApi } from "../actions";


export const farmerFormFeatureKey = 'farmerFormFeatureKey';

export interface FarmerFormState {
  farmerDetails: FarmerSave | null,
  loading: boolean,
  error: string | null
};

export const initialFarmerForm: FarmerFormState = {
  farmerDetails: null,
  loading: false,
  error: null
}

export const reducer = createReducer(
  initialFarmerForm,
  on(FarmerForm.createFarmer, (state, {farmerDetails}) => {
    return {
      ...state,
      farmerDetails,
      loading: true
    }
  }),
  on(FarmerFormApi.createFormSuccess, (state, {farmerDetails}) => {
    return {
      ...state,
      farmerDetails,
      loading: false
    }
  }),
  on(FarmerFormApi.createFarmerFail, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error 
    }
  })
);

export const getData = (state: FarmerFormState) => state.farmerDetails;
export const getLoading = (state: FarmerFormState) => state.loading;
export const getError = (state: FarmerFormState) => state.error;
