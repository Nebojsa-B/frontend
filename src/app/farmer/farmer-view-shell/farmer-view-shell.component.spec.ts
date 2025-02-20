import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerViewShellComponent } from './farmer-view-shell.component';

describe('FarmerViewShellComponent', () => {
  let component: FarmerViewShellComponent;
  let fixture: ComponentFixture<FarmerViewShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerViewShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerViewShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
