import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerLocationMapComponent } from './farmer-location-map.component';

describe('FarmerLocationMapComponent', () => {
  let component: FarmerLocationMapComponent;
  let fixture: ComponentFixture<FarmerLocationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerLocationMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
