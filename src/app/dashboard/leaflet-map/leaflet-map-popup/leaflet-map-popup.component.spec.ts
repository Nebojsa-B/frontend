import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletMapPopupComponent } from './leaflet-map-popup.component';

describe('LeafletMapPopupComponent', () => {
  let component: LeafletMapPopupComponent;
  let fixture: ComponentFixture<LeafletMapPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeafletMapPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeafletMapPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
