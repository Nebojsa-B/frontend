import * as fromUserDetailsForm from './user-details.reducer';
import * as fromUserList from './user-list.reducer';
import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

export const stateFeatureKey = 'user';

export interface State {
  [fromUserDetailsForm.userDetailsFeatureKey]: fromUserDetailsForm.UserDetailsState;
  [fromUserList.userListFeatureKey]: fromUserList.UserListState;
}

export function reducers(state: State, action: Action) {
  return combineReducers({
    [fromUserDetailsForm.userDetailsFeatureKey]: fromUserDetailsForm.reducer,
    [fromUserList.userListFeatureKey]: fromUserList.reducer
  })(state, action);
}

export const selectState = createFeatureSelector<State>(stateFeatureKey);