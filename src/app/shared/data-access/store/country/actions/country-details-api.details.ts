import { createAction, props } from "@ngrx/store";
import { CountryDetail } from "../../../models/country/CountryDropdown";


export const loadCountryDetailsSuccess = createAction(
  '[Country] Country Details Success',
  props<{country: CountryDetail}>()
);

export const loadCountryDetailsFail = createAction(
  '[Country] Country Details Fail',
  props<{error: string}>()
);