import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as CountryDropdownSelectors from '../selectors/country-dropdown.selector';
import * as Actions from '../actions';

@Injectable()
export class CountryDropdownFacade {

  selectLoading$ = this.store.pipe(
    select(CountryDropdownSelectors.selectCountryDropdownLoading)
  );

  selectData$ = this.store.pipe(
    select(CountryDropdownSelectors.selectCountryDropdownData)
  );

  selectDataWithLoading$ = this.store.pipe(
    select(CountryDropdownSelectors.selectCountryDropdownDataWithLoading)
  );

  selectError$ = this.store.pipe(
    select(CountryDropdownSelectors.selectCountryDropdownError)
  );

  Actions = Actions;

  constructor(private readonly store: Store){}

  getCountryDropdown(){
    this.store.dispatch(Actions.CountriesDropdown.loadCountryDropdown());
  }
}