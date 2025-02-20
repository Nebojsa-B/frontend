import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FarmerForm, FarmerFormApi } from "../actions";
import { catchError, map, of, switchMap } from "rxjs";
import { FarmerService } from "../../../services/farmer.service";

@Injectable()
export class FarmerViewEffect {

  $viewFarmer = createEffect(() => 
    this.actions$.pipe(
      ofType(FarmerForm.viewFarmer),
      switchMap(({farmerId}) => this.farmerService.getFarmer(farmerId).pipe(
        map((farmer) => FarmerFormApi.viewFarmerSuccess({farmer})),
        catchError((error) => {
          return of(FarmerFormApi.viewFarmerFail(error))
        })
      )
    ))
);


  constructor(
    private actions$: Actions,
    private farmerService: FarmerService){}
}