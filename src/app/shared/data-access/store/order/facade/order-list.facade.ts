import { Injectable } from "@angular/core";
import { ActionsSubject, select, Store } from "@ngrx/store";
import * as Actions from '../actions';
import * as OrderListSelectors from '../selectors/order-list.selector';
import { OrderStatus } from "../../../models/order/Order";
import { ofType } from "@ngrx/effects";

@Injectable()
export class OrderListFacade {

  selectLoading$ = this.store.pipe(
    select(OrderListSelectors.selectLoading)
  );

  selectData$ = this.store.pipe(
    select(OrderListSelectors.selectOrders)
  );

  selectError$ = this.store.pipe(
    select(OrderListSelectors.selectError)
  )


  Actions = Actions
  constructor(
    private readonly store: Store,
    private actionsListener$: ActionsSubject
  ){}

  getOrders(orderStatus?: OrderStatus) {
    this.store.dispatch(Actions.OrderList.OrderList({orderStatus}))
  }

  checkout(){
    this.store.dispatch(Actions.OrderList.Checkout());
  }

  cancelOrder(orderProductId: number){
    this.store.dispatch(Actions.OrderList.RemoveOrderProduct({id: orderProductId}));
  }

  saveSuccessActions() {
    return this.actionsListener$.pipe(
      ofType(
        Actions.OrderListApi.CheckoutSuccess,
        Actions.OrderListApi.RemoveOrderProductSuccess
      )
    )
  }
}