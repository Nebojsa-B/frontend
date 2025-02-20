import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as CountryDetailsSelectors from '../selectors/country-details.selector';
import * as Actions from '../actions';

@Injectable()
export class CountryDetailsFacade {

  selectLoading$ = this.store.pipe(
    select(CountryDetailsSelectors.selectCountryDropdownLoading)
  );

  selectData$ = this.store.pipe(
    select(CountryDetailsSelectors.selectCountryDropdownData)
  );

  selectError$ = this.store.pipe(
    select(CountryDetailsSelectors.selectCountryDropdownError)
  );

  Actions = Actions;

  constructor(private readonly store: Store){}

  getCountryDetails(){
    this.store.dispatch(Actions.CountryDetails.loadCountryDetails());
  }
}