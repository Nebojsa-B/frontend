import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CountryService } from "../../../services/country.service";
import { CountryDetails, CountryDetailsApi } from '../actions';
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CountryDetailsEffect {

  $loadCountryDetails = createEffect(() => 
    this.actions$.pipe(
      ofType(CountryDetails.loadCountryDetails),
      switchMap(() => this.countryService.getCountryBasedOnUser()
        .pipe(
          map((country) => (CountryDetailsApi.loadCountryDetailsSuccess({country}))),
          catchError((error) => {
            return of(CountryDetailsApi.loadCountryDetailsFail({error}))
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private countryService: CountryService
  ){}

}