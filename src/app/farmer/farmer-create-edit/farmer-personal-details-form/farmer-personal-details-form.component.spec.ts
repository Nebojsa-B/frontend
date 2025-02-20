import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerPersonalDetailsFormComponent } from './farmer-personal-details-form.component';

describe('FarmerPersonalDetailsFormComponent', () => {
  let component: FarmerPersonalDetailsFormComponent;
  let fixture: ComponentFixture<FarmerPersonalDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerPersonalDetailsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerPersonalDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
