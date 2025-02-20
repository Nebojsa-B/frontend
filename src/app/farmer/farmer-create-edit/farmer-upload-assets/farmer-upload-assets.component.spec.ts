import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerUploadAssetsComponent } from './farmer-upload-assets.component';

describe('FarmerUploadAssetsComponent', () => {
  let component: FarmerUploadAssetsComponent;
  let fixture: ComponentFixture<FarmerUploadAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerUploadAssetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmerUploadAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
