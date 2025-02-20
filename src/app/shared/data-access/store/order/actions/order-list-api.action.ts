import { createAction, props } from "@ngrx/store";
import { Order } from "../../../models/order/Order";


export const OrderListSuccess = createAction(
  '[Orders] Order List Success',
  props<{orders: Order[]}>()
);

export const OrderListFail = createAction(
  '[Orders] Order List Fail',
  props<{error: string}>()
);

export const CheckoutSuccess = createAction(
  '[Orders] Checkout Success',
  props<{message: string}>()
);

export const CheckoutFail = createAction(
  '[Orders] Checkout Fail'
);

export const RemoveOrderProductSuccess = createAction(
  '[Orders] Remove Order Product Success',
  props<{message: string}>()
);

export const RemoveOrderProductFail = createAction(
  '[Orders] Remove Order Product Fail',
  props<{error: string}>()
);