import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerProductsFormComponent } from './farmer-products-form.component';

describe('FarmerProductsFormComponent', () => {
  let component: FarmerProductsFormComponent;
  let fixture: ComponentFixture<FarmerProductsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerProductsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerProductsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
