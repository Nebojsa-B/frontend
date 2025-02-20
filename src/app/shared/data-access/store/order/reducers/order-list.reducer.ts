import { createReducer, on } from "@ngrx/store";
import { Order } from "../../../models/order/Order";
import { OrderList, OrderListApi } from "../actions";
import { immerOn } from "ngrx-immer/store";

export const orderListFeatureKey = 'orderList';

export interface OrderListState {
  orders: Order[] | null,
  error: string | null;
  loading: boolean;
}

export const initialState: OrderListState = {
  orders: null,
  error: null,
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(OrderList.OrderList, (state, { orderStatus }) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(OrderList.Checkout, (state, {}) => {
    return {
      ...state,
      orders: null,
      loading: true
    };
  }),
  immerOn(OrderList.RemoveOrderProduct, (state, {id}) => {
    if (!state.orders) return;

      const orderProductIndex = state.orders[0].orderProducts?.findIndex(
        (orderProduct) => orderProduct.id === id
      );
      const orderProduct = state.orders[0].orderProducts.find((orderProduct) => orderProduct.id === id)

      if (orderProductIndex !== -1 && orderProduct) {

        state.orders[0]?.orderProducts.splice(orderProductIndex, 1);
        state.orders[0].totalPrice -= (orderProduct.price * orderProduct.quantity);

        if(!state.orders[0].orderProducts.length)
          state.orders = null;
      } 
        

      state.loading = true;
      state.error = null;

  }),
  on(OrderListApi.CheckoutSuccess, (state, {}) => {
    return {
      ...state,
      loading: false,
      error: null,
    };
  }),
  on(OrderListApi.RemoveOrderProductSuccess, (state, {}) => {
    return {
      ...state,
      loading: false,
      error: null,
    };
  }),
  on(OrderListApi.OrderListSuccess, (state, { orders }) => {
    return {
      ...state,
      orders,
      loading: false,
      error: null,
    };
  }),
  on(OrderListApi.OrderListFail, (state, action) => {
    return {
      ...initialState,
      loading: false,
      error: action.error,
    };
  }),
)

export const getOrders = (state: OrderListState) => state.orders;
export const getLoading = (state: OrderListState) => state.loading;
export const getError = (state: OrderListState) => state.error;