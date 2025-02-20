import { createAction, props } from "@ngrx/store";
import { PersonalDetails } from "../../../models/auth/LogIn";
import { FarmDetails, LocationDetails, ProductDetails } from "../../../models/user/UserDetails";


export const loadUserDetails = createAction(
  '[User Details] Load User Details'
);

export const updatePersonalDetails = createAction(
  '[User Details] Update Personal Details',
  props<{ personalDetails: PersonalDetails }>()
);

export const updateUserLocationDetails = createAction(
  '[User Details] Update Location Details',
  props<{ locationDetails: LocationDetails }>()
);

export const updateUserFarmDetails = createAction(
  '[User Details] Update Farm Details',
  props<{ farmDetails: FarmDetails }>()
);

export const updateUserProducts = createAction(
  '[User Details] Update Products',
  props<{ productDetails: ProductDetails[] }>()
);

export const addProductToFarmer = createAction(
  '[User Details] Add Product to Farmer',
  props<{ farmerId: number, productDetails: ProductDetails }>()
);
