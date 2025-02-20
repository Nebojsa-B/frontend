import { createSelector } from "@ngrx/store";
import * as fromFarmerList from '../reducers/farmer-list.reducer';
import * as fromFarmer from '../reducers';

export const selectFarmerListState = createSelector(
  fromFarmer.selectState,
    (state) => state[fromFarmerList.farmerListFeatureKey]
);

export const selectFarmerListData = createSelector(
  selectFarmerListState,
  fromFarmerList.getData
);

export const selectFarmerListLoading = createSelector(
  selectFarmerListState,
  fromFarmerList.getLoading
);

export const selectFarmerListError = createSelector(
  selectFarmerListState,
    fromFarmerList.getError
);
