import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryDetail, CountryDropdownDataWithLoading } from '../../shared/data-access/models/country/CountryDropdown';
import { Observable, takeUntil } from 'rxjs';
import { GeoCodingResponse } from '../../shared/data-access/models/map/Geocoding';
import { UserDetailsFacade } from '../../shared/data-access/store/user/facade/user-details.facade';
import { LocationDetails } from '../../shared/data-access/models/user/UserDetails';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CountryDetailsFacade } from '../../shared/data-access/store/country/facade/country-details.facade';

interface LocationFormGroup {
  id: FormControl,
  countryId: FormControl,
  name: FormControl,
  city: FormControl,
  address: FormControl,
}

@Component({
  selector: 'profile-shipping-address',
  templateUrl: './profile-shipping-address.component.html',
  styleUrl: './profile-shipping-address.component.scss'
})
export class ProfileShippingAddressComponent {

  isPreview = false;
  
  locationForm!: FormGroup<LocationFormGroup>;

  locationUserDetails$: Observable<LocationDetails | undefined>;
  countryDetail$: Observable<CountryDetail | null>;
  
  get formControl() {
    return this.locationForm.controls;
  }
  
  get locationFormValues() {
    return this.locationForm.value as CountryDetail;
  }
  
  constructor(
    private fb: FormBuilder,
    private userDetailsFacade: UserDetailsFacade,
    private countryDetailFacade: CountryDetailsFacade,
  ) {
    this.countryDetailFacade.getCountryDetails();

    this.locationForm = this.fb.group({
      id: [null],
      countryId: [null],
      name: [{value: '', disabled: true}, Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
    });
  
    this.locationUserDetails$ = this.userDetailsFacade.selectUserDetailsLocation$;
    this.countryDetail$ = this.countryDetailFacade.selectData$;

    this.locationUserDetails$.pipe(takeUntilDestroyed()).subscribe(data => {
      this.locationForm.patchValue({...data});
    });

    this.countryDetail$.pipe(takeUntilDestroyed()).subscribe(data => {
      this.formControl.name.setValue(data?.name);
    });

  }

  saveLocation() {
    console.log('Location form: ', {...this.locationForm.value});

    this.userDetailsFacade.updateLocation({...this.locationForm.value} as LocationDetails);
  }

}
