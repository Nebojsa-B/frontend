import { createAction, props } from "@ngrx/store";
import { CountryDropdown } from "../../../models/country/CountryDropdown";

export const loadCountryDropdownSuccess = createAction(
  '[Country Dropdown] Load Country Dropdown Success',
  props<{ data: CountryDropdown[] }>()
);

export const loadCountryDropdownFail = createAction(
  '[Country Dorpdown] Load Country Dropdown Fail',
  props<{ error: string }>()
);