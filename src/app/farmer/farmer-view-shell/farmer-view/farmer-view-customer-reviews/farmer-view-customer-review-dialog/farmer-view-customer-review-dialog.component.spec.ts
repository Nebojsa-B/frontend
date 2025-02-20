import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerViewCustomerReviewDialogComponent } from './farmer-view-customer-review-dialog.component';

describe('FarmerViewCustomerReviewDialogComponent', () => {
  let component: FarmerViewCustomerReviewDialogComponent;
  let fixture: ComponentFixture<FarmerViewCustomerReviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerViewCustomerReviewDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerViewCustomerReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
