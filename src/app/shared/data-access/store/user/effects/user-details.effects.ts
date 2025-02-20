import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { UserService } from "../../../services/user.service";
import { UserDetailsActions, UserDetailsApiActions } from "../actions";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class UserDetailsEffect {
  $userDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDetailsActions.loadUserDetails),
      switchMap(() =>
        this.userService.getCurrentUser().pipe(
          map((userDetails) => UserDetailsApiActions.loadUserDetailsSuccess({userDetails})),
          catchError((error) => of(UserDetailsApiActions.loadUserDetailsFail(error)))
        )
      )
    )
  );

  $updateUserPersonalDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDetailsActions.updatePersonalDetails),
      switchMap(({personalDetails}) =>
        this.userService.updateUserPersonalDetails(personalDetails).pipe(
          map(() => UserDetailsApiActions.updateUserPersonalDetailsSuccess({message: 'Personal Details Updated Successfully'})),
          catchError((error) => of(UserDetailsApiActions.updateUserPersonalDetailsFail(error)))
        )
      )
    )
  );

  $updateLocationDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDetailsActions.updateUserLocationDetails),
      switchMap(({locationDetails}) =>
        this.userService.updateLocationDetails(locationDetails).pipe(
          map(() => UserDetailsApiActions.updateUserLocationDetailsSuccess({message: 'Updated User Loation Successfully'})),
          catchError((error) => of(UserDetailsApiActions.updateUserLocationDetailsFail(error)))
        )
      )
    )
  );

  $updateFarmDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDetailsActions.updateUserFarmDetails),
      switchMap(({farmDetails}) =>
        this.userService.updateFarmDetails(farmDetails).pipe(
          map(() => UserDetailsApiActions.updateUserFarmDetailsSuccess({message: 'Updated Farm Details Successfully'})),
          catchError((error) => of(UserDetailsApiActions.updateUserFarmDetailsFail(error)))
        )
      )
    )
  );

  $addProductToFarmer = createEffect(() =>
    this.actions$.pipe(
      ofType(UserDetailsActions.addProductToFarmer),
      switchMap(({farmerId, productDetails}) =>
        this.userService.addProductToFarmer(farmerId, productDetails).pipe(
          map(() => UserDetailsApiActions.addProductToFarmerSuccss({message: 'Added Product Successfully'})),
          catchError((error) => of(UserDetailsApiActions.addProductToFarmerFail(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}
}