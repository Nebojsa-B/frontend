import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerViewMapComponent } from './farmer-view-map.component';

describe('FarmerViewMapComponent', () => {
  let component: FarmerViewMapComponent;
  let fixture: ComponentFixture<FarmerViewMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerViewMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerViewMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
