import { createAction, props } from "@ngrx/store";
import { CustomerReview } from "../../../models/customer-review/CustomerReview";


export const loadCustomerReviewsSuccess = createAction(
  '[Customer Review] Load Customer Review List Success',
  props<{customerReviews: CustomerReview[]}>()
);

export const loadCustomerReviewsFail = createAction(
  '[Customer Review] Load Customer Review List Fail',
  props<{error: string}>()
);

export const removeCustomerReviewSuccess = createAction(
  '[Customer Review] Remove Customer Review Success'
);

export const removeCustomerReviewFail = createAction(
  '[Customer Review] removeCustomerReviewFail',
  props<{id: number}>()
);