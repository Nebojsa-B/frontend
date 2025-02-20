import { Injectable } from "@angular/core";
import { ActionsSubject, select, Store } from "@ngrx/store";
import * as Actions from '../actions';
import * as UserListSelectors from '../selectors/user-list.selectors';

@Injectable()
export class UserListFacade {


  selectData$ = this.store.pipe(
    select(UserListSelectors.selectUserListData)
  );

  selectError$ = this.store.pipe(
    select(UserListSelectors.selectUserListError)
  );

  selectLoading$ = this.store.pipe(
    select(UserListSelectors.selectUserListLoading)
  );


  Actions = Actions
  constructor(
    private readonly store: Store,
    private actionsListener$: ActionsSubject
  ) {}

  getUserDetails() {
    this.store.dispatch(Actions.UserListActions.loadUserList());
  }

}