import { createReducer, on } from "@ngrx/store";
import { UserDetails } from "../../../models/user/UserDetails";
import { UserDetailsActions, UserDetailsApiActions } from "../actions";


export const userDetailsFeatureKey = 'userDetailsFeatureKey';

export interface UserDetailsState {
  userDetails: Partial<UserDetails> | null,
  loading: boolean,
  error: string | null
};

export const initialUserDetails: UserDetailsState = {
  userDetails: null,
  loading: false,
  error: null
}

export const reducer = createReducer(
  initialUserDetails,
  on(UserDetailsActions.loadUserDetails, (state, {  }) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(UserDetailsActions.updatePersonalDetails, (state, { personalDetails }) => {
    return {
      ...state,
      userDetails: {
        ...state.userDetails,
        ...personalDetails
      },
      loading: true
    }
  }),
  on(UserDetailsActions.updateUserLocationDetails, (state, { locationDetails }) => {
    return {
      ...state,
      userDetails: {
        ...state.userDetails,
        location: {
          ...locationDetails
        } 
      },
      loading: true
    }
  }),
  on(UserDetailsActions.updateUserFarmDetails, (state, { farmDetails }) => {
    return {
      ...state,
      userDetails: {
        ...state.userDetails,
        farmer: {
          ...state.userDetails?.farmer,
          products: state.userDetails?.farmer?.products || [],
          farm: farmDetails
        }
      },
      loading: true
    }
  }),
  on(UserDetailsActions.addProductToFarmer, (state, { productDetails }) => {
    return {
      ...state,
      userDetails: {
        ...state.userDetails,
        farmer: {
          ...state.userDetails?.farmer,
          farm: state.userDetails!.farmer!.farm,
          products: [
            ...(state.userDetails?.farmer?.products || []), 
            productDetails 
          ],
        }
      },
      loading: true
    }
  }),
  on(UserDetailsApiActions.addProductToFarmerSuccss, (state, {}) => {
    return {
      ...state,
      loading: false
    }
  }),
  on(UserDetailsApiActions.loadUserDetailsSuccess, (state, { userDetails }) => {
    return {
      ...state,
      userDetails,
      loading: false
    }
  }),
  on(UserDetailsApiActions.loadUserDetailsFail, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error 
    }
  }),
  on(UserDetailsApiActions.updateUserPersonalDetailsSuccess, (state, {  }) => {
    return {
      ...state,
      loading: false
    }
  }),
  on(UserDetailsApiActions.updateUserLocationDetailsSuccess, (state, {  }) => {
    return {
      ...state,
      loading: false
    }
  }),
  on(UserDetailsApiActions.updateUserFarmDetailsSuccess, (state, {  }) => {
    return {
      ...state,
      loading: false
    }
  }),
);

export const getData = (state: UserDetailsState) => state.userDetails;
export const getPersonalInformation = (state: UserDetailsState) => ({
    id: state.userDetails?.id,
    email: state.userDetails?.email,
    firstName: state.userDetails?.firstName,
    lastName: state.userDetails?.lastName,
    phone: state.userDetails?.phone,
    profileImageUrl: state.userDetails?.profileImageUrl,
    coverImageUrl: state.userDetails?.coverImageUrl,
  });

export const getLocation = (state: UserDetailsState) => state.userDetails?.location;
export const getFarm = (state: UserDetailsState) => state.userDetails?.farmer?.farm;
export const getProducts = (state: UserDetailsState) => state.userDetails?.farmer?.products;

export const getLoading = (state: UserDetailsState) => state.loading;
export const getError = (state: UserDetailsState) => state.error;