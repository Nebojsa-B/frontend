import { createSelector } from '@ngrx/store';
import * as fromFarmerView from '../reducers/farmer-view.reducer';
import * as fromFarmer from '../reducers';

const selectFarmerViewState = createSelector(
  fromFarmer.selectState,
  (state) => state[fromFarmerView.farmerViewFeatureKey]
);

export const selectFarmerViewData = createSelector(
  selectFarmerViewState,
  fromFarmerView.getData
);

export const selectFarmerViewLoading = createSelector(
  selectFarmerViewState,
    fromFarmerView.getLoading
)

export const selectFarmerViewError = createSelector(
  selectFarmerViewState,
  fromFarmerView.getError
);