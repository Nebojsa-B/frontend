import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CountryService } from "../../../services/country.service";
import { CountriesDropdown, CountriesDropdownApi } from '../actions';
import { catchError, exhaustMap, map, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CountryDropdownEffect {

  $loadCountryDropdown = createEffect(() => 
    this.actions$.pipe(
      ofType(CountriesDropdown.loadCountryDropdown),
      exhaustMap(() => this.countryService.getCountryDropdown()
        .pipe(
          map(data => (CountriesDropdownApi.loadCountryDropdownSuccess({data}))),
          catchError((error) => {
            return of(CountriesDropdownApi.loadCountryDropdownFail({error}))
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private countryService: CountryService
  ){

  }
}