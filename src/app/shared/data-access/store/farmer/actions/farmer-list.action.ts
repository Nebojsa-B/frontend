import { createAction, props } from "@ngrx/store";
import { FarmerParams } from "../../../models/farmer/Farmer";
import { SearchQueryParams } from "../../../models/farmer/Search";

export const loadFarmers = createAction(
  '[Farmer] Load Farmers',
  props<{params?: SearchQueryParams}>()
)