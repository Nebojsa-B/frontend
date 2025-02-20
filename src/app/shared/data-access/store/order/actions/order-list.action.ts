import { createAction, props } from "@ngrx/store";
import { OrderStatus } from "../../../models/order/Order";

export const OrderList = createAction(
  '[Orders] Order List',
  props<{orderStatus?: OrderStatus}>()
);

export const Checkout = createAction(
  '[Orders] Checkout'
);

export const RemoveOrderProduct = createAction(
  '[Orders] Remove Order Product',
  props<{id: number}>()
);