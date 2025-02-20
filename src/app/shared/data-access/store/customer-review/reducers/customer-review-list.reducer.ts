import { createReducer, on } from "@ngrx/store";
import { CustomerReview, CustomerReviewParams } from "../../../models/customer-review/CustomerReview";
import { CustomerReviewForm, CustomerReviewList, CustomerReviewListApi } from "../actions";
import { immerOn } from 'ngrx-immer/store';

export const customerReviewListFeatureKey = 'farmerListFeatureKey';

export interface CustomerReviewListState {
  customerReviews: CustomerReview[],
  params: CustomerReviewParams | {}
  loading: boolean,
  error: string | null
}

export const initialState: CustomerReviewListState = {
  customerReviews: [],
  params: {},
  loading: false,
  error: null
}

export const reducer = createReducer(
  initialState,
  on(CustomerReviewList.loadCustomerReviews, (state, action) => {
    return {
      ...state,
      params: action.params ?? {},
      loading: true,
    }
  }),
  on(CustomerReviewForm.createCustomerReview, (state, action) => {
    return {
      ...state,
      customerReviews: [action.customerReview, ...state.customerReviews],
      loading: true,
    }
  }),
  immerOn(CustomerReviewList.removeCustomerReview, (state, action) => {
    state.customerReviews = state.customerReviews.filter(
      (a) => a.id !== action.id
    );
  }),
  on(CustomerReviewListApi.loadCustomerReviewsSuccess, (state, {customerReviews}) => {
    return {
      ...state,
      customerReviews,
      loading: false
    }
  }),
  on(CustomerReviewListApi.loadCustomerReviewsFail, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error
    }
  }),
  
)

export const getData = (state: CustomerReviewListState) => state.customerReviews;
export const getLoading = (state: CustomerReviewListState) => state.loading;
export const getError = (state: CustomerReviewListState) => state.error;