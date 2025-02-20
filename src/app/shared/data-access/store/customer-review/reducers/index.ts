import * as fromCustomerReviewForm from './customer-review-form.reducer';
import * as fromCustomerReviewList from './customer-review-list.reducer';
import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

export const stateFeatureKey = 'customerReview';

export interface State {
  [fromCustomerReviewForm.customerReviewFormFeatureKey]: fromCustomerReviewForm.CustomerReiewFormState;
  [fromCustomerReviewList.customerReviewListFeatureKey]: fromCustomerReviewList.CustomerReviewListState;
}

export function reducers(state: State, action: Action) {
  return combineReducers({
    [fromCustomerReviewForm.customerReviewFormFeatureKey]: fromCustomerReviewForm.reducer,
    [fromCustomerReviewList.customerReviewListFeatureKey]: fromCustomerReviewList.reducer
  })(state, action);
}

export const selectState = createFeatureSelector<State>(stateFeatureKey);