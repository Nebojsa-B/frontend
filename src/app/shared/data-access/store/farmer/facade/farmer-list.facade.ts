import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as FarmerListSelectors from '../selectors/farmer-list.selector';
import * as Actions from '../actions';
import { FarmerParams } from "../../../models/farmer/Farmer";
import { SearchQueryParams } from "../../../models/farmer/Search";

@Injectable()
export class FarmerListFacade {

  selectFarmerList$ = this.store.pipe(
    select(FarmerListSelectors.selectFarmerListData)
  );

  selectFarmerListLoading$ = this.store.pipe(
    select(FarmerListSelectors.selectFarmerListLoading)
  );

  selectFarmerListError$ = this.store.pipe(
    select(FarmerListSelectors.selectFarmerListError)
  );

  Actions = Actions;

  constructor(private readonly store: Store) {}

  getFarmers(params?: SearchQueryParams) {
    this.store.dispatch(
      Actions.FarmerList.loadFarmers({params})
    );
  }

}