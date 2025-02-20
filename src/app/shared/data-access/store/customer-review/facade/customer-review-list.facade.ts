import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as Actions from '../actions';
import * as CustomerReviewListSelectors from '../selectors/customer-review-list.selector';
import { CustomerReview, CustomerReviewParams } from "../../../models/customer-review/CustomerReview";

@Injectable()
export class CustomerReviewListFacade {

  selectCustomerReviewList$ = this.store.pipe(
    select(CustomerReviewListSelectors.selectCustomerReviewListData)
  );

  selectCustomerReviewListLoading$ = this.store.pipe(
    select(CustomerReviewListSelectors.selectCustomerReviewListLoading)
  );

  selectCustomerReviewListError$ = this.store.pipe(
    select(CustomerReviewListSelectors.selectCustomerReviewListError)
  );

  Actions = Actions;

  constructor(private readonly store: Store) {}

  getCustomerReviews(params: CustomerReviewParams){
    this.store.dispatch(
      Actions.CustomerReviewList.loadCustomerReviews({params})
    );
  }

  removeCustomerReview(id: number) {
    this.store.dispatch(Actions.CustomerReviewList.removeCustomerReview({id}))
  }

}