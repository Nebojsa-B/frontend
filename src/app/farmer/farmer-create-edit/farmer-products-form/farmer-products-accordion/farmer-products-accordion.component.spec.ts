import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerProductsAccordionComponent } from './farmer-products-accordion.component';

describe('FarmerProductsAccordionComponent', () => {
  let component: FarmerProductsAccordionComponent;
  let fixture: ComponentFixture<FarmerProductsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerProductsAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerProductsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
