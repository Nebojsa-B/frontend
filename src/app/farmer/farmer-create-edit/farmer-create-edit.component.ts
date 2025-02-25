import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFacade } from '../../shared/data-access/store/auth/facade/auth.facade';
import { map, Observable } from 'rxjs';
import { Profile } from '../../shared/data-access/models/auth/LogIn';
import { CountryDetail } from '../../shared/data-access/models/country/CountryDropdown';
import { CountryDetailsFacade } from '../../shared/data-access/store/country/facade/country-details.facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FarmerProduct } from '../../shared/data-access/models/product/Product';
import { FarmerFormFacade } from '../../shared/data-access/store/farmer/facade/farmer-form.facade';
import { FarmerSave } from '../../shared/data-access/models/farmer/Farmer';

interface FarmerFormGroup {
  assetsUploadForm: FormGroup;
  user: FormGroup;
  farm: FormGroup;
  location: FormGroup;
  products: FormArray
}

@Component({
  selector: 'app-farmer-create-edit',
  templateUrl: './farmer-create-edit.component.html',
  styleUrl: './farmer-create-edit.component.scss'
})
export class FarmerCreateEditComponent {

  farmerForm!: FormGroup<FarmerFormGroup>;
  authUser$!: Observable<Profile | null>;
  country$!: Observable<CountryDetail | null>;

  get formControl() {
    return this.farmerForm.controls;
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private countryDetailFacade: CountryDetailsFacade,
    private farmerFormFacade: FarmerFormFacade
  ) {
    this.farmerFormFacade.saveSuccessActions().subscribe(data => {
      this.router.navigateByUrl('dashboard');
    })

    this.farmerForm = this.fb.group({
      assetsUploadForm: this.fb.group({}),
      user: this.fb.group({}),
      farm: this.fb.group({}),
      location: this.fb.group({}),
      products: this.fb.array([])
    });

    this.authUser$ = this.authFacade.selectUserLoginResponse$;

    this.authFacade.selectUserLoginResponse$.pipe(takeUntilDestroyed()).subscribe(data => {
      if(!data) return;

      this.countryDetailFacade.getCountryDetails();
    });

    this.country$ = this.countryDetailFacade.selectData$;
  }

  onSubmit() {
    if(!this.farmerForm.value) return;

    const { assetsUploadForm, farm, location, user, products  } = this.farmerForm.value;

    this.farmerFormFacade.createFarmer({
      location: {
        address: location.address,
        city: location.city,
        lat: location.lat,
        lng: location.lng
      },
      farm,
      user: {
        ...user,
        coverImageUrl: assetsUploadForm.coverImageUrl,
        profileImageUrl: assetsUploadForm.profileImageUrl,
      },
      products
    } as FarmerSave);
  }

  onCancel() {
    this.router.navigateByUrl('dashboard');
  }

}
