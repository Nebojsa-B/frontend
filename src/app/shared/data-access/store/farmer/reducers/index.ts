import * as fromFarmerForm from './farmer-form.reducer';
import * as fromFarmerList from './farmer-list.reducer';
import * as fromFarmerView from './farmer-view.reducer';
import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

export const stateFeatureKey = 'farmer';

export interface State {
  [fromFarmerForm.farmerFormFeatureKey]: fromFarmerForm.FarmerFormState;
  [fromFarmerList.farmerListFeatureKey]: fromFarmerList.FarmerListState;
  [fromFarmerView.farmerViewFeatureKey]: fromFarmerView.FarmerViewState;
}

export function reducers(state: State, action: Action) {
  return combineReducers({
    [fromFarmerForm.farmerFormFeatureKey]: fromFarmerForm.reducer,
    [fromFarmerList.farmerListFeatureKey]: fromFarmerList.reducer,
    [fromFarmerView.farmerViewFeatureKey]: fromFarmerView.reducer
  })(state, action);
}

export const selectState = createFeatureSelector<State>(stateFeatureKey);