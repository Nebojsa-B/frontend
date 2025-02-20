import { createSelector } from '@ngrx/store';
import * as fromFarmerForm from '../reducers/farmer-form.reducer';
import * as fromFarmer from '../reducers';

const selectFarmerFormState = createSelector(
  fromFarmer.selectState,
  (state) => state[fromFarmerForm.farmerFormFeatureKey]
);

export const selectFarmerFormData = createSelector(
  selectFarmerFormState,
  fromFarmerForm.getData
);

export const selectFarmerFormLoading = createSelector(
  selectFarmerFormState,
    fromFarmerForm.getLoading
)

export const selectFarmerFormError = createSelector(
  selectFarmerFormState,
  fromFarmerForm.getError
);

