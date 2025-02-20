import { createSelector } from '@ngrx/store';
import * as fromCountryDropdown from '../reducers/country-dropdown.reducer';
import * as fromCountry from '../reducers';

const selectCountryDropdownState = createSelector(
  fromCountry.selectState,
  (state) => state[fromCountryDropdown.countryDropdownFeatureKey]
);

export const selectCountryDropdownData = createSelector(
  selectCountryDropdownState,
  fromCountryDropdown.getData
);

export const selectCountryDropdownDataWithLoading = createSelector(
  selectCountryDropdownState,
  fromCountryDropdown.getDataWithLoading
);

export const selectCountryDropdownLoading = createSelector(
  selectCountryDropdownState,
    fromCountryDropdown.getLoading
)

export const selectCountryDropdownError = createSelector(
  selectCountryDropdownState,
  fromCountryDropdown.getError
);