import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePersonalInformationsComponent } from './profile-personal-informations.component';

describe('ProfilePersonalInformationsComponent', () => {
  let component: ProfilePersonalInformationsComponent;
  let fixture: ComponentFixture<ProfilePersonalInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilePersonalInformationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilePersonalInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
