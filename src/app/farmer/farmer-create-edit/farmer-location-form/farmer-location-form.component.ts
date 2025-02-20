import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountryDetail, CountryDropdownDataWithLoading } from '../../../shared/data-access/models/country/CountryDropdown';
import { GeoCodingResponse } from '../../../shared/data-access/models/map/Geocoding';

interface LocationFormGroup {
  name: FormControl,
  city: FormControl,
  address: FormControl,
  lat: FormControl,
  lng: FormControl,
  countryFlagUrl: FormControl,
  geoJson: FormControl
}

@Component({
  selector: 'farmer-location-form',
  templateUrl: './farmer-location-form.component.html',
  styleUrl: './farmer-location-form.component.scss'
})
export class FarmerLocationFormComponent {
@Input() farmerForm!: FormGroup;
@Input() set country(value: CountryDetail | null) {
  if(!value) return;

  this.locationForm.patchValue({
    ...value,
  })
}

locationForm!: FormGroup<LocationFormGroup>;
countriesDropdown$!: Observable<CountryDropdownDataWithLoading | null>

get formControl(){
  return this.locationForm.controls;
}

get locationFormValues() {
  return this.locationForm.value as CountryDetail;
}

constructor(private fb: FormBuilder
){
  this.locationForm = this.fb.group({
    name: [{value: '', disabled: true}, Validators.required],
    city: ['Belgrade', Validators.required],
    address: ['Milorada Gavrilovca 22', Validators.required],
    lat: ['', Validators.required],
    lng: ['', Validators.required],
    countryFlagUrl: '',
    geoJson: '',
  });

}

ngOnInit() {
  this.farmerForm.setControl('location', this.locationForm)
}

pointsChanged(coords: {lat: number, lon: number}){
  this.formControl.lat.setValue(coords.lat);
  this.formControl.lng.setValue(coords.lon);
}

}
