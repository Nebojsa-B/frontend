import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCountryDetailsMapComponent } from './dashboard-country-details-map.component';

describe('DashboardCountryDetailsMapComponent', () => {
  let component: DashboardCountryDetailsMapComponent;
  let fixture: ComponentFixture<DashboardCountryDetailsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCountryDetailsMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCountryDetailsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
