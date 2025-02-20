import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import * as fromCustomerReview from './reducers';
import { EffectsModule } from "@ngrx/effects";
import { CustomerReviewListEffect } from "./effects/customer-review-list.effect";
import { CustomerReviewFormEffect } from "./effects/customer-review-form.effect";
import { CustomerReviewService } from "../../services/customer-review.service";
import { CustomerReviewFormFacade } from "./facade/customer-review-form.facade";
import { CustomerReviewListFacade } from "./facade/customer-review-list.facade";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCustomerReview.stateFeatureKey, fromCustomerReview.reducers),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([CustomerReviewListEffect, CustomerReviewFormEffect])
  ],
  providers: [CustomerReviewService, CustomerReviewFormFacade, CustomerReviewListFacade]
})
export class SharedDataAccessCustomerReviewModule { }