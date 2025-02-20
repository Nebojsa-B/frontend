import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerViewAboutComponent } from './farmer-view-about.component';

describe('FarmerViewAboutComponent', () => {
  let component: FarmerViewAboutComponent;
  let fixture: ComponentFixture<FarmerViewAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerViewAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerViewAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
