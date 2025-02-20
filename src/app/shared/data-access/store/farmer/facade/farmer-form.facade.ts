import { Injectable } from "@angular/core";
import { ActionsSubject, select, Store } from "@ngrx/store";
import * as Actions from '../actions';
import * as FarmerFormSelectors from '../selectors/farmer-form.selector';
import { FarmerSave } from "../../../models/farmer/Farmer";
import { ofType } from "@ngrx/effects";

@Injectable()
export class FarmerFormFacade {

  selectLoading$ = this.store.pipe(
    select(FarmerFormSelectors.selectFarmerFormLoading)
  );

  selectData$ = this.store.pipe(
    select(FarmerFormSelectors.selectFarmerFormData)
  );

  selectError$ = this.store.pipe(
    select(FarmerFormSelectors.selectFarmerFormError)
  )


  Actions = Actions
  constructor(
    private readonly store: Store,
    private actionsListener$: ActionsSubject
  ){}

  createFarmer(farmerDetails: FarmerSave){
    this.store.dispatch(Actions.FarmerForm.createFarmer({farmerDetails}))
  }

  saveSuccessActions(){
    return this.actionsListener$.pipe(
      ofType(
        Actions.FarmerFormApi.createFormSuccess
      )
    )
  }
}