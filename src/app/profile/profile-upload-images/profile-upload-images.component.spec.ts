import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUploadImagesComponent } from './profile-upload-images.component';

describe('ProfileUploadImagesComponent', () => {
  let component: ProfileUploadImagesComponent;
  let fixture: ComponentFixture<ProfileUploadImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileUploadImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileUploadImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
