import * as fromCreateOrder from './create-order.reducer';
import * as fromOrderList from './order-list.reducer';
import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

export const stateFeatureKey = 'order';

export interface State {
  [fromCreateOrder.createOrderFeatureKey]: fromCreateOrder.CreateOrderState;
  [fromOrderList.orderListFeatureKey]: fromOrderList.OrderListState;
}

export function reducers(state: State, action: Action) {
  return combineReducers({
    [fromCreateOrder.createOrderFeatureKey]: fromCreateOrder.reducer,
    [fromOrderList.orderListFeatureKey]: fromOrderList.reducer
  })(state, action);
}

export const selectState = createFeatureSelector<State>(stateFeatureKey);