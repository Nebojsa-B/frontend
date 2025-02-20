import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerShellComponent } from './farmer-shell.component';

describe('FarmerShellComponent', () => {
  let component: FarmerShellComponent;
  let fixture: ComponentFixture<FarmerShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
