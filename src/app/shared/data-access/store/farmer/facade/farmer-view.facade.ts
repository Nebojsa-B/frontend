import { Injectable } from "@angular/core";
import { ActionsSubject, select, Store } from "@ngrx/store";
import * as Actions from '../actions';
import * as FarmerViewSelectors from '../selectors/farmer-view.selector';
import { ofType } from "@ngrx/effects";

@Injectable()
export class FarmerViewFacade {

  selectLoading$ = this.store.pipe(
    select(FarmerViewSelectors.selectFarmerViewLoading)
  );

  selectData$ = this.store.pipe(
    select(FarmerViewSelectors.selectFarmerViewData)
  );

  selectError$ = this.store.pipe(
    select(FarmerViewSelectors.selectFarmerViewError)
  )


  Actions = Actions
  constructor(
    private readonly store: Store,
    private actionsListener$: ActionsSubject
  ){}

  getFarmer(farmerId: number){
    this.store.dispatch(Actions.FarmerForm.viewFarmer({farmerId}));
  }

  saveSuccessActions(){
    return this.actionsListener$.pipe(
      ofType(
        Actions.FarmerFormApi.viewFarmerSuccess
      )
    )
  }
}