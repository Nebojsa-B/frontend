import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CustomerReviewService } from "../../../services/customer-review.service";
import { Injectable } from "@angular/core";
import { CustomerReviewForm, CustomerReviewFormApi } from '../actions';
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CustomerReviewFormEffect {

  $createCustomerReviewEffect = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerReviewForm.createCustomerReview),
      switchMap(({farmerId, customerReview}) => this.customerReviewService.createCustomerReview(farmerId, customerReview)
        .pipe(
          map((customerReview) => (CustomerReviewFormApi.createCustomerReviewSuccess({customerReview}))),
          catchError((error) => {
            return of(CustomerReviewFormApi.createCustomerReviewFail({error}))
          })
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private customerReviewService: CustomerReviewService
  ){}

}