import { createReducer, on } from '@ngrx/store';
import { CreateOrder, CreateOrderApi } from '../actions';
import { Order } from '../../../models/order/Order';
import { immerOn } from 'ngrx-immer/store';

export const createOrderFeatureKey = 'createOrder';

export interface CreateOrderState {
  order: Order | null,
  error: string | null;
  loading: boolean;
}

export const initialState: CreateOrderState = {
  order: null,
  error: null,
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(CreateOrder.createOrderShoppingCart, (state, { productId, quantity }) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(CreateOrderApi.createOrderShoppingCartSuccess, (state, { order }) => {
    return {
      ...state,
      order,
      loading: false,
      error: null,
    };
  }),
  on(CreateOrderApi.createOrderShoppingCartFail, (state, action) => {
    return {
      ...initialState,
      loading: false,
      error: action.error,
    };
  }),
  on(CreateOrder.createOrderBuyNow, (state, { productId, quantity }) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(CreateOrderApi.createOrderBuyNowSuccess, (state, { order }) => {
    return {
      ...state,
      order,
      loading: false,
      error: null,
    };
  }),
  on(CreateOrderApi.createOrderBuyNowFail, (state, action) => {
    return {
      ...initialState,
      loading: false,
      error: action.error,
    };
  }),
)

export const getOrder = (state: CreateOrderState) => state.order;
export const getLoading = (state: CreateOrderState) => state.loading;
export const getError = (state: CreateOrderState) => state.error;