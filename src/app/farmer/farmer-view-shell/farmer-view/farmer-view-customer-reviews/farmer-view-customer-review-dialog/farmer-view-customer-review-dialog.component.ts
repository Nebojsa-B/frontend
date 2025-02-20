import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Profile } from '../../../../../shared/data-access/models/auth/LogIn';

export interface CustomerReviewFormGroup {
  stars: FormControl,
  comment: FormControl,
}

@Component({
  selector: 'farmer-view-customer-review-dialog',
  templateUrl: './farmer-view-customer-review-dialog.component.html',
  styleUrl: './farmer-view-customer-review-dialog.component.scss'
})
export class FarmerViewCustomerReviewDialogComponent {

  customerReview: FormGroup<CustomerReviewFormGroup>;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {currentUser: Profile}
  ) {
    this.customerReview = this.fb.group({
      comment: '',
      stars: [0, Validators.required]
    });
  }

  get formControl(){
    return this.customerReview.controls;
  }

  updatedStars(stars: number){
    this.formControl.stars.setValue(stars);
  }

  shortcutName(){
    return this.data.currentUser.firstName.slice(0,1) + this.data.currentUser.lastName.slice(0,1);
  }
}
