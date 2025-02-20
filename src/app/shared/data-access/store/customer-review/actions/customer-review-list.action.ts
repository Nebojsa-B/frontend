import { createAction, props } from "@ngrx/store";
import { CustomerReviewParams } from "../../../models/customer-review/CustomerReview";

export const loadCustomerReviews = createAction(
  '[Customer Review] Load Customer Review List',
  props<{params: CustomerReviewParams}>()
);

export const removeCustomerReview = createAction(
  '[Customer Review] Remove Customer Review',
  props<{id: number}>()
);