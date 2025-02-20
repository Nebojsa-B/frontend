import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerViewProductsComponent } from './farmer-view-products.component';

describe('FarmerViewProductsComponent', () => {
  let component: FarmerViewProductsComponent;
  let fixture: ComponentFixture<FarmerViewProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerViewProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerViewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
