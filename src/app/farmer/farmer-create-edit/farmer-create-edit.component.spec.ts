import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCreateEditComponent } from './farmer-create-edit.component';

describe('FarmerCreateEditComponent', () => {
  let component: FarmerCreateEditComponent;
  let fixture: ComponentFixture<FarmerCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerCreateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
