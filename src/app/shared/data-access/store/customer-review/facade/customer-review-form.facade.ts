import { Injectable } from "@angular/core";
import { ActionsSubject, select, Store } from "@ngrx/store";
import * as Actions from '../actions';
import * as CustomerReviewFormSelectors from '../selectors/customer-review-form.selector';
import { CustomerReview, CustomerReviewDetails } from "../../../models/customer-review/CustomerReview";

@Injectable()
export class CustomerReviewFormFacade {

  selectLoading$ = this.store.pipe(
    select(CustomerReviewFormSelectors.selectCustomerReviewFormLoading)
  );

  selectData$ = this.store.pipe(
    select(CustomerReviewFormSelectors.selectCustomerReviewFormData)
  );

  selectError$ = this.store.pipe(
    select(CustomerReviewFormSelectors.selectCustomerReviewFormError)
  )


  Actions = Actions
  constructor(
    private readonly store: Store,
    private actionsListener$: ActionsSubject
  ){}

  createCustomerReview(farmerId: number, customerReview: CustomerReview){
    console.log(farmerId, customerReview);
    
    this.store.dispatch(Actions.CustomerReviewForm.createCustomerReview({farmerId, customerReview}))
  }

  // saveSuccessActions(){
  //   return this.actionsListener$.pipe(
  //     ofType(
  //       Actions.FarmerFormApi.createFormSuccess
  //     )
  //   )
  // }
}