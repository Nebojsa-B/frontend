import { createSelector } from '@ngrx/store';
import * as fromState from '../reducers';
import * as fromOrderList from '../reducers/order-list.reducer';

const selectOrderListState = createSelector(
  fromState.selectState,
  (state) => state[fromOrderList.orderListFeatureKey]
);

export const selectOrders = createSelector(
  selectOrderListState,
  fromOrderList.getOrders
);

export const selectLoading = createSelector(
  selectOrderListState,
  fromOrderList.getLoading
);

export const selectError = createSelector(
  selectOrderListState,
  fromOrderList.getError
);