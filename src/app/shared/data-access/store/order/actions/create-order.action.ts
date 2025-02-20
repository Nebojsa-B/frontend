import { createAction, props } from "@ngrx/store";


export const createOrderShoppingCart = createAction(
  '[Order/Shopping Cart] Create Order Shopping Cart',
  props<{productId: number, quantity:number}>()
);

export const createOrderBuyNow = createAction(
  '[Order/Buy Now] Create Order Buy Now',
  props<{productId: number, quantity: number}>()
)