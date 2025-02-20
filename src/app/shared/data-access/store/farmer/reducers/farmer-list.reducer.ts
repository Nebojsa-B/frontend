import { createReducer, on } from "@ngrx/store";
import { Farmer, FarmerParams } from "../../../models/farmer/Farmer";
import { FarmerList, FarmerListApi } from "../actions";
import { SearchQueryParams } from "../../../models/farmer/Search";

export const farmerListFeatureKey = 'farmerListFeatureKey';

export interface FarmerListState {
  farmers: Farmer[],
  params: SearchQueryParams,
  loading: boolean,
  error: string | null
}

export const initialState: FarmerListState = {
  farmers: [],
  params: {},
  loading: false,
  error: null
}

export const reducer = createReducer(
  initialState,
  on(FarmerList.loadFarmers, (state, action) => {
    return {
      ...state,
      params: action.params ?? {},
      loading: true,
    }
  }),
  on(FarmerListApi.loadFarmerSuccess, (state, {farmers}) => {
    return {
      ...state,
      farmers,
      loading: false
    }
  }),
  on(FarmerListApi.loadFarmerFail, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error
    }
  })
)

export const getData = (state: FarmerListState) => state.farmers;
export const getLoading = (state: FarmerListState) => state.loading;
export const getError = (state: FarmerListState) => state.error;