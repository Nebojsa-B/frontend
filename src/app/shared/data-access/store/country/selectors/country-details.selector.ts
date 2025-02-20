import { createSelector } from '@ngrx/store';
import * as fromCountryDetails from '../reducers/country-details.reducer';
import * as fromCountry from '../reducers';

const selectCountryDetailsState = createSelector(
  fromCountry.selectState,
  (state) => state[fromCountryDetails.countryDetailsFeatureKey]
);

export const selectCountryDropdownData = createSelector(
  selectCountryDetailsState,
  fromCountryDetails.getData
);

export const selectCountryDropdownLoading = createSelector(
  selectCountryDetailsState,
    fromCountryDetails.getLoading
)

export const selectCountryDropdownError = createSelector(
  selectCountryDetailsState,
  fromCountryDetails.getError
);