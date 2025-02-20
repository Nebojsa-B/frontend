import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerLocationFormComponent } from './farmer-location-form.component';

describe('FarmerLocationFormComponent', () => {
  let component: FarmerLocationFormComponent;
  let fixture: ComponentFixture<FarmerLocationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerLocationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
