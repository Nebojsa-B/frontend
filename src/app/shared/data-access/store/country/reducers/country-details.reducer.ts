import { createReducer, on } from "@ngrx/store";
import { CountryDetail } from "../../../models/country/CountryDropdown";
import { CountryDetails, CountryDetailsApi } from "../actions";

export const countryDetailsFeatureKey = 'countryDetailsFeatureKey';

export interface CountryDetailsState {
  data: CountryDetail | null,
  loading: boolean,
  error: string | null
}

export const countryDetailsInitialState: CountryDetailsState = {
  data: null,
  loading: false,
  error: null
}

export const reducer = createReducer(
  countryDetailsInitialState,
  on(CountryDetails.loadCountryDetails, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),
  on(CountryDetailsApi.loadCountryDetailsSuccess, (state, {country}) => {
    return {
      ...state,
      data: country,
      loading: false
    }
  }),
  on(CountryDetailsApi.loadCountryDetailsFail, (state, {error}) => {
    return {
      ...state,
      error: error,
      loading: false,
    }
  })
);

export const getData = (state: CountryDetailsState) => state.data;

export const getLoading = (state: CountryDetailsState) => state.loading;

export const getError = (state: CountryDetailsState) => state.error;