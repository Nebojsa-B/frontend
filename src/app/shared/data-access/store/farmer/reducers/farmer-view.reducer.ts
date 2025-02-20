import { createReducer, on } from "@ngrx/store";
import { Farmer, FarmerSave } from "../../../models/farmer/Farmer";
import { FarmerForm, FarmerFormApi } from "../actions";
import { CreateOrder } from "../../order/actions";
import { immerOn } from "ngrx-immer/store";


export const farmerViewFeatureKey = 'farmerViewFeatureKey';

export interface FarmerViewState {
  farmer: Farmer | null,
  loading: boolean,
  error: string | null
};

export const initialFarmerView: FarmerViewState = {
  farmer: null,
  loading: false,
  error: null
}

export const reducer = createReducer(
  initialFarmerView,
  on(FarmerForm.viewFarmer, (state, {farmerId}) => {
    return {
      ...state,
      loading: true
    }
  }),
  immerOn(CreateOrder.createOrderShoppingCart, (state, { productId, quantity }) => {
    const productIndex = state.farmer?.products?.findIndex(
      (product) => product.id === productId
    );
  
    // If productIndex is invalid, return the current state
    if (productIndex === -1 || productIndex === undefined) return state;
  
    // Create a new products array with the updated quantity for the specific product
    const updatedProducts = state.farmer!.products.map((product, index) =>
      index === productIndex
        ? { ...product, quantity: product.quantity - quantity }
        : product
    );
  
    return {
      ...state,
      farmer: {
        ...state.farmer!,
        products: updatedProducts,
      },
    };
  }),
  immerOn(CreateOrder.createOrderBuyNow, (state, { productId, quantity }) => {
    const productIndex = state.farmer?.products?.findIndex(
      (product) => product.id === productId
    );
  
    // If productIndex is invalid, return the current state
    if (productIndex === -1 || productIndex === undefined) return state;
  
    // Create a new products array with the updated quantity for the specific product
    const updatedProducts = state.farmer!.products.map((product, index) =>
      index === productIndex
        ? { ...product, quantity: product.quantity - quantity }
        : product
    );
  
    return {
      ...state,
      farmer: {
        ...state.farmer!,
        products: updatedProducts,
      },
    };
  }),
  on(FarmerFormApi.viewFarmerSuccess, (state, {farmer}) => {
    return {
      ...state,
      farmer,
      loading: false
    }
  }),
  on(FarmerFormApi.viewFarmerFail, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error 
    }
  })
);

export const getData = (state: FarmerViewState) => state.farmer;
export const getLoading = (state: FarmerViewState) => state.loading;
export const getError = (state: FarmerViewState) => state.error;