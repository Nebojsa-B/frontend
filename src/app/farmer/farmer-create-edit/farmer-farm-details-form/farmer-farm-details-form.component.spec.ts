import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerFarmDetailsFormComponent } from './farmer-farm-details-form.component';

describe('FarmerFarmDetailsFormComponent', () => {
  let component: FarmerFarmDetailsFormComponent;
  let fixture: ComponentFixture<FarmerFarmDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerFarmDetailsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerFarmDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
