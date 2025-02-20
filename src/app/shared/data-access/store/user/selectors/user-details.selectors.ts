import { createSelector } from '@ngrx/store';
import * as fromUserDetails from '../reducers/user-details.reducer';
import * as fromUser from '../reducers';

const selectUserDetailsState = createSelector(
  fromUser.selectState,
  (state) => state[fromUserDetails.userDetailsFeatureKey]
);

export const selectUserDetailsData = createSelector(
  selectUserDetailsState,
  fromUserDetails.getData
);

export const selectUserDetailsPersonalInformation = createSelector(
  selectUserDetailsState,
  fromUserDetails.getPersonalInformation
);

export const selectUserDetailsLocation = createSelector(
  selectUserDetailsState,
  fromUserDetails.getLocation
);

export const selectUserDetailsFarm = createSelector(
  selectUserDetailsState,
  fromUserDetails.getFarm
);

export const selectUserDetailsProducts = createSelector(
  selectUserDetailsState,
  fromUserDetails.getProducts
);

export const selectUserDetailsLoading = createSelector(
  selectUserDetailsState,
  fromUserDetails.getLoading
)

export const selectUserDetailsError = createSelector(
  selectUserDetailsState,
  fromUserDetails.getError
);