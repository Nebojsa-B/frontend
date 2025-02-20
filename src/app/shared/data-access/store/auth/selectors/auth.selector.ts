import { createSelector } from '@ngrx/store';
import * as fromState from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

const selectAuthState = createSelector(
  fromState.selectState,
  (state) => state[fromAuth.authFeatureKey]
);

export const selectEmail = createSelector(
  selectAuthState,
  fromAuth.getEmail
);

export const selectLoginResponseData = createSelector(
  selectAuthState,
  fromAuth.getLoginResponse
);

export const selectUserLoginResponse = createSelector(
  selectAuthState,
  fromAuth.getUserLoginResponse
);

export const selectAccessToken = createSelector(
  selectAuthState,
  fromAuth.getAccessToken
);

export const selectError = createSelector(selectAuthState, fromAuth.getError);

export const selectIsInitializing = createSelector(
  selectAuthState,
  fromAuth.getInitializing
);