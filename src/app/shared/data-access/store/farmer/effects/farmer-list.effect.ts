import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FarmerService } from "../../../services/farmer.service";
import { FarmerList, FarmerListApi } from "../actions";
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()
export class FarmerListEffects {

  $loadFarmers = createEffect(() => this.actions$.pipe(
    ofType(FarmerList.loadFarmers),
    switchMap(({params}) => this.farmerService.getFarmers(params).pipe(
      map((farmers) => FarmerListApi.loadFarmerSuccess({farmers})),
      catchError((error) => {
        return of(FarmerListApi.loadFarmerFail({error}))
      })
    ))
  ))




  constructor(private actions$: Actions,
    private farmerService: FarmerService
  ){}
}