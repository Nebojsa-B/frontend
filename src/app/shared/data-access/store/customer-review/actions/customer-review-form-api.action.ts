import { createAction, props } from "@ngrx/store";
import { CustomerReviewDetails } from "../../../models/customer-review/CustomerReview";


export const createCustomerReviewSuccess = createAction(
  '[Customer Review] Customer Review Success',
  props<{ customerReview: CustomerReviewDetails }>()
);

export const createCustomerReviewFail = createAction(
  '[Customer Review] Customer Review Fail',
  props<{ error: string }>()
);