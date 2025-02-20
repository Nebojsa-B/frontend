import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileShoppingCartComponent } from './profile-shopping-cart.component';

describe('ProfileShoppingCartComponent', () => {
  let component: ProfileShoppingCartComponent;
  let fixture: ComponentFixture<ProfileShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileShoppingCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
