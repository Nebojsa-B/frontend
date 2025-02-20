import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerViewCustomerReviewsComponent } from './farmer-view-customer-reviews.component';

describe('FarmerViewCustomerReviewsComponent', () => {
  let component: FarmerViewCustomerReviewsComponent;
  let fixture: ComponentFixture<FarmerViewCustomerReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerViewCustomerReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerViewCustomerReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
