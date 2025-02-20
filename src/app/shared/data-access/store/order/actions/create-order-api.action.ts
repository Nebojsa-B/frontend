import { createAction, props } from "@ngrx/store";
import { Order } from "../../../models/order/Order";


export const createOrderShoppingCartSuccess = createAction(
  '[Order/Shopping Cart] Create Order Shopping Cart Success',
  props<{message: string, order: Order}>()
);

export const createOrderShoppingCartFail = createAction(
  '[Order/Shopping Cart] Create Order Shopping Cart Fail',
  props<{error: string}>()
);

export const createOrderBuyNowSuccess = createAction(
  '[Order/Buy Now] Create Order Buy Now Success',
  props<{message: string, order: Order}>()
);

export const createOrderBuyNowFail = createAction(
  '[Order/Buy Now] Create Order Buy Now Fail',
  props<{error: string}>()
);

