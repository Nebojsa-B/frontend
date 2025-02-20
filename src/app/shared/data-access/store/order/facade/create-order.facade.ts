import { Injectable } from "@angular/core";
import { ActionsSubject, select, Store } from "@ngrx/store";
import * as Actions from '../actions';
import * as CreateOrderSelectors from '../selectors/create-order.selector';
import { ofType } from "@ngrx/effects";

@Injectable()
export class CreateOrderFacade {

  selectLoading$ = this.store.pipe(
    select(CreateOrderSelectors.selectLoading)
  );

  selectData$ = this.store.pipe(
    select(CreateOrderSelectors.selectOrder)
  );

  selectError$ = this.store.pipe(
    select(CreateOrderSelectors.selectError)
  )


  Actions = Actions
  constructor(
    private readonly store: Store,
    private actionsListener$: ActionsSubject
  ){}

  addToShoppingCart(productId: number, quantity: number) {
    this.store.dispatch(Actions.CreateOrder.createOrderShoppingCart({productId, quantity}))
  }

  buyNow(productId: number, quantity: number) {
    this.store.dispatch(Actions.CreateOrder.createOrderBuyNow({productId, quantity}))
  }

  saveSuccessActions(){
    return this.actionsListener$.pipe(
      ofType(
        Actions.CreateOrderApi.createOrderBuyNowSuccess,
        Actions.CreateOrderApi.createOrderShoppingCartSuccess
      )
    )
  }
}