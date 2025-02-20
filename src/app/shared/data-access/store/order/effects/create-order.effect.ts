import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CreateOrder, CreateOrderApi } from "../actions";
import { OrderService } from "../../../services/order.service";

@Injectable()
export class CreateOrderEffect {
  $orderShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateOrder.createOrderShoppingCart),
      switchMap(({productId, quantity}) =>
        this.orderService.addToShoppingCart(productId, quantity).pipe(
          map((order) => CreateOrderApi.createOrderShoppingCartSuccess({message: 'Added to Shopping Cart Successfully', order})),
          catchError((error) => {
            return of(CreateOrderApi.createOrderShoppingCartFail({ error }));
          })
        )
      )
    )
  );

  $orderBuyNow = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateOrder.createOrderBuyNow),
      switchMap(({productId, quantity}) =>
        this.orderService.buyNow(productId, quantity).pipe(
          map((order) => CreateOrderApi.createOrderBuyNowSuccess({message: 'Ordered Successfully', order})),
          catchError((error) => {
            return of(CreateOrderApi.createOrderBuyNowFail({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}
}