import { createSelector } from '@ngrx/store';
import * as fromState from '../reducers';
import * as fromCreateOrder from '../reducers/create-order.reducer';

const selectCreateOrderState = createSelector(
  fromState.selectState,
  (state) => state[fromCreateOrder.createOrderFeatureKey]
);

export const selectOrder = createSelector(
  selectCreateOrderState,
  fromCreateOrder.getOrder
);

export const selectLoading = createSelector(
  selectCreateOrderState,
  fromCreateOrder.getLoading
);

export const selectError = createSelector(
  selectCreateOrderState,
  fromCreateOrder.getError
);