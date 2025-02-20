import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { OrderList, OrderListApi } from "../actions";
import { OrderService } from "../../../services/order.service";

@Injectable()
export class OrderListEffect {

  $orderList = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderList.OrderList),
      switchMap(({orderStatus}) =>
        this.orderService.getOrders(orderStatus).pipe(
          map((orders) => OrderListApi.OrderListSuccess({orders})),
          catchError((error) => {
            return of(OrderListApi.OrderListFail({ error }));
          })
        )
      )
    )
  );

  $checkout = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderList.Checkout),
      switchMap(() =>
        this.orderService.checkout().pipe(
          map((order) => OrderListApi.CheckoutSuccess({message: 'Checkout Successfully'})),
          catchError((error) => {
            return of(OrderListApi.CheckoutFail());
          })
        )
      )
    )
  );

  $removeOrderProduct = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderList.RemoveOrderProduct),
      switchMap(({id}) =>
        this.orderService.removeOrderProduct(id).pipe(
          map((order) => OrderListApi.RemoveOrderProductSuccess({message: 'Product removed from Order Successfully'})),
          catchError((error) => {
            return of(OrderListApi.RemoveOrderProductFail(error));
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