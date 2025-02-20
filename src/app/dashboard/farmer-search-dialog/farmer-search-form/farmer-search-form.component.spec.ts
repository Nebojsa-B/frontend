import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSearchFormComponent } from './farmer-search-form.component';

describe('FarmerSearchFormComponent', () => {
  let component: FarmerSearchFormComponent;
  let fixture: ComponentFixture<FarmerSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerSearchFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
