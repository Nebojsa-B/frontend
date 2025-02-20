import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CountryDropdownEffect } from './effects/country-dropdown.effect';
import * as fromCountry from './reducers';
import { CountryDropdownFacade } from './facade/country-dropdown.facade';
import { CountryService } from '../../services/country.service';
import { HttpClientModule } from '@angular/common/http';
import { CountryDetailsEffect } from './effects/country-details.effect';
import { CountryDetailsFacade } from './facade/country-details.facade';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCountry.stateFeatureKey, fromCountry.reducers),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([
      CountryDropdownEffect,
      CountryDetailsEffect
    ]),
    HttpClientModule
  ],
  providers: [CountryDropdownFacade, CountryDetailsFacade, CountryService]
})
export class SharedDataAccessCountryModule { }
