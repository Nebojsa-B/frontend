import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FarmerForm, FarmerFormApi } from "../actions";
import { catchError, map, of, switchMap } from "rxjs";
import { FarmerService } from "../../../services/farmer.service";

@Injectable()
export class FarmerFormEffect {

  $createFarmer = createEffect(() => 
    this.actions$.pipe(
      ofType(FarmerForm.createFarmer),
      switchMap(({farmerDetails}) => this.farmerService.createFarmer( farmerDetails).pipe(
        map((farmerDetails) => FarmerFormApi.createFormSuccess({farmerDetails})),
        catchError((error) => {
          return of(FarmerFormApi.createFarmerFail(error))
        })
      )
    ))
);


  constructor(
    private actions$: Actions,
    private farmerService: FarmerService){}
}