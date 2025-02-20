import { createReducer, on } from "@ngrx/store";
import { CustomerReviewDetails } from "../../../models/customer-review/CustomerReview";
import { CustomerReviewForm, CustomerReviewFormApi } from "../actions";

export const customerReviewFormFeatureKey = 'customerReviewFormFeatureKey';

export interface CustomerReiewFormState {
  customerReview: CustomerReviewDetails | null,
  loading: boolean,
  error: string | null
};

export const initialCustomerReviewFormState: CustomerReiewFormState = {
  customerReview: null,
  loading: false,
  error: null
}

export const reducer = createReducer(
  initialCustomerReviewFormState,
  on(CustomerReviewForm.createCustomerReview, (state, {customerReview}) => {
    return {
      ...state,
      customerReview,
      loading: true
    }
  }),
  on(CustomerReviewFormApi.createCustomerReviewSuccess, (state, {customerReview}) => {
    return {
      ...state,
      customerReview,
      loading: false
    }
  }),
  on(CustomerReviewFormApi.createCustomerReviewFail, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error 
    }
  })
);

export const getData = (state: CustomerReiewFormState) => state.customerReview;
export const getLoading = (state: CustomerReiewFormState) => state.loading;
export const getError = (state: CustomerReiewFormState) => state.error;