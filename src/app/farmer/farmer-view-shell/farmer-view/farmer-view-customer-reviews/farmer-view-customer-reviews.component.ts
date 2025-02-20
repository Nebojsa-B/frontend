import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FarmerViewCustomerReviewDialogComponent } from './farmer-view-customer-review-dialog/farmer-view-customer-review-dialog.component';
import { CustomerReview, CustomerReviewDetails } from '../../../../shared/data-access/models/customer-review/CustomerReview';
import { CustomerReviewFormFacade } from '../../../../shared/data-access/store/customer-review/facade/customer-review-form.facade';
import { Profile } from '../../../../shared/data-access/models/auth/LogIn';
import { CustomerReviewListFacade } from '../../../../shared/data-access/store/customer-review/facade/customer-review-list.facade';

@Component({
  selector: 'farmer-view-customer-reviews',
  templateUrl: './farmer-view-customer-reviews.component.html',
  styleUrl: './farmer-view-customer-reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerViewCustomerReviewsComponent {
  @Input() customerReviews!: CustomerReview[] | null;
  @Input() currentUser!: Profile | null;

  @Output() newCustomerReview = new EventEmitter<CustomerReviewDetails>();

  constructor(private customerReviewListFacade: CustomerReviewListFacade) {}

  readonly dialog = inject(MatDialog);
  
  openDialog() {
    const dialogRef = this.dialog.open(FarmerViewCustomerReviewDialogComponent, {
      data: {
        currentUser: this.currentUser
      }
    });

    dialogRef.afterClosed().subscribe(result => {
        this.newCustomerReview.emit(result as CustomerReviewDetails);

        this.customerReviews?.unshift({
          ...result,
          user: this.currentUser
        } as CustomerReview);
    });
  }

  starCount(stars: number) {
    if(!this.customerReviews) return;
    
    return this.customerReviews.filter(review => review.stars === stars).length
  }

  getStarAverage(): number {
    if(!this.customerReviews) return 0;

    const totalScore = this.customerReviews.reduce((sum, review) => sum + review.stars, 0);

    if(!this.customerReviews.length)
      return this.customerReviews.length;

    const result = totalScore / this.customerReviews.length;

    return parseFloat(result.toFixed(1));
  }

  getShortcutName(review: CustomerReview){
    return review.user.firstName.slice(0,1) + review.user.lastName.slice(0,1);
  }

  removeCustomerReview(review: CustomerReview) {
    if(review.id === undefined) return;

    this.customerReviewListFacade.removeCustomerReview(review.id);
  }
}
