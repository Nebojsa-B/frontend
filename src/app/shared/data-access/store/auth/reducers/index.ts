import * as fromAuth from './auth.reducer';
import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

export const stateFeatureKey = 'auth';

export interface State {
  [fromAuth.authFeatureKey]: fromAuth.AuthState;
}

export function reducers(state: State, action: Action) {
  return combineReducers({
    [fromAuth.authFeatureKey]: fromAuth.reducer,
  })(state, action);
}

export const selectState = createFeatureSelector<State>(stateFeatureKey);