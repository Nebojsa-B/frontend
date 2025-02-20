import { createSelector } from '@ngrx/store';
import * as fromCustomerReviewForm from '../reducers/customer-review-form.reducer';
import * as fromCustomerReview from '../reducers';

const selectCustomerReviewFormState = createSelector(
  fromCustomerReview.selectState,
  (state) => state[fromCustomerReviewForm.customerReviewFormFeatureKey]
);

export const selectCustomerReviewFormData = createSelector(
  selectCustomerReviewFormState,
  fromCustomerReviewForm.getData
);

export const selectCustomerReviewFormLoading = createSelector(
  selectCustomerReviewFormState,
  fromCustomerReviewForm.getLoading
)

export const selectCustomerReviewFormError = createSelector(
  selectCustomerReviewFormState,
  fromCustomerReviewForm.getError
);