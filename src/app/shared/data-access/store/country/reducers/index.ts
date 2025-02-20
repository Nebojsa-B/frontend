import * as fromCountryDropdown from './country-dropdown.reducer';
import * as fromCountryDetails from './country-details.reducer';
import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

export const stateFeatureKey = 'country';

export interface State {
  [fromCountryDropdown.countryDropdownFeatureKey]: fromCountryDropdown.CountryDropdownState;
  [fromCountryDetails.countryDetailsFeatureKey]: fromCountryDetails.CountryDetailsState;
}

export function reducers(state: State, action: Action) {
  return combineReducers({
    [fromCountryDropdown.countryDropdownFeatureKey]: fromCountryDropdown.reducer,
    [fromCountryDetails.countryDetailsFeatureKey]: fromCountryDetails.reducer
  })(state, action);
}

export const selectState = createFeatureSelector<State>(stateFeatureKey);