import { createSelector } from "@ngrx/store";
import * as fromCustomerReviewList from '../reducers/customer-review-list.reducer';
import * as fromCustomerReview from '../reducers';


export const selectCustomerReviewListState = createSelector(
  fromCustomerReview.selectState,
    (state) => state[fromCustomerReviewList.customerReviewListFeatureKey]
);

export const selectCustomerReviewListData = createSelector(
  selectCustomerReviewListState,
  fromCustomerReviewList.getData
);

export const selectCustomerReviewListLoading = createSelector(
  selectCustomerReviewListState,
  fromCustomerReviewList.getLoading
);

export const selectCustomerReviewListError = createSelector(
  selectCustomerReviewListState,
    fromCustomerReviewList.getError
);