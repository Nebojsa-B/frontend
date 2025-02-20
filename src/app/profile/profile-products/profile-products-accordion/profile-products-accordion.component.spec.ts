import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProductsAccordionComponent } from './profile-products-accordion.component';

describe('ProfileProductsAccordionComponent', () => {
  let component: ProfileProductsAccordionComponent;
  let fixture: ComponentFixture<ProfileProductsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileProductsAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileProductsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
