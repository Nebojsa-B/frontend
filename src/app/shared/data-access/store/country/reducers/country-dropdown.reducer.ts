import { createReducer, on } from "@ngrx/store";
import { CountryDropdown, CountryDropdownDataWithLoading } from "../../../models/country/CountryDropdown";
import { CountriesDropdown, CountriesDropdownApi } from "../actions";

export const countryDropdownFeatureKey = 'countryDropdownFeatureKey';

export interface CountryDropdownState {
  data: CountryDropdown[],
  loading: boolean,
  error: string | null
}

export const countryDropdownInitialState: CountryDropdownState = {
  data: [],
  loading: false,
  error: null
}

export const reducer = createReducer(
  countryDropdownInitialState,
  on(CountriesDropdown.loadCountryDropdown, (state) => {
    return {
      ...state,
      loading: !state.data.length ? true : false,
    }
  }),
  on(CountriesDropdownApi.loadCountryDropdownSuccess, (state, {data}) => {
    return {
      ...state,
      data,
      loading: false
    }
  }),
  on(CountriesDropdownApi.loadCountryDropdownFail, (state, {error}) => {
    return {
      ...state,
      error: error,
      loading: false,
    }
  })
);

export const getData = (state: CountryDropdownState) => state.data;

export const getDataWithLoading = (state: CountryDropdownState) => {
  return {
    data: state.data,
    loading: state.loading
  } as CountryDropdownDataWithLoading
};

export const getLoading = (state: CountryDropdownState) => state.loading;

export const getError = (state: CountryDropdownState) => state.error;