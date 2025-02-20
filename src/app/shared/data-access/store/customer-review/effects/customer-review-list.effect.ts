import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CustomerReviewService } from "../../../services/customer-review.service";
import { CustomerReviewList, CustomerReviewListApi } from "../actions";
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()
export class CustomerReviewListEffect {

  $loadCustomerReview = createEffect(() => 
  this.action$.pipe(
    ofType(CustomerReviewList.loadCustomerReviews),
    switchMap(({params}) => this.customerReviewService.getCustomerReviews(params).pipe(
      map((customerReviews) => CustomerReviewListApi.loadCustomerReviewsSuccess({customerReviews})),
      catchError((error) => {
        return of(CustomerReviewListApi.loadCustomerReviewsFail({error}))
      })
    ))
  )
  )

  $removeCustomerReview = createEffect(() => 
    this.action$.pipe(
      ofType(CustomerReviewList.removeCustomerReview),
      switchMap(({id}) => this.customerReviewService.removeCustomerReview(id).pipe(
        map(() => CustomerReviewListApi.removeCustomerReviewSuccess()),
        catchError((error) => {
          return of(CustomerReviewListApi.removeCustomerReviewFail({id}))
        })
      ))
    )
    )

  constructor(private action$: Actions,
    private customerReviewService: CustomerReviewService
  ){}
}