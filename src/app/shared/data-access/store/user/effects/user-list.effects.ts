import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { UserService } from "../../../services/user.service";
import { UserDetailsActions, UserDetailsApiActions, UserListActions, UserListApiActions } from "../actions";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class UserListEffect {
  $userList = createEffect(() =>
    this.actions$.pipe(
      ofType(UserListActions.loadUserList),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((users) => UserListApiActions.loadUserListSuccess({users})),
          catchError((error) => of(UserListApiActions.loadUserListFail(error)))
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