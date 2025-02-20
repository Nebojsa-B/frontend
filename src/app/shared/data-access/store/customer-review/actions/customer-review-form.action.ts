import { createAction, props } from "@ngrx/store";
import { CustomerReview, CustomerReviewDetails } from "../../../models/customer-review/CustomerReview";

export const createCustomerReview = createAction(
  '[Customer Review] Customer Review Details Create',
  props<{farmerId:number, customerReview: CustomerReview}>()
);