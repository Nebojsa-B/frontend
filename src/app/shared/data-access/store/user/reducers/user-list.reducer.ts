import { createReducer, on } from "@ngrx/store";
import { UserDetails } from "../../../models/user/UserDetails";
import { UserListActions, UserListApiActions } from "../actions";


export const userListFeatureKey = 'userListFeatureKey';

export interface UserListState {
  users: UserDetails[] | null,
  loading: boolean,
  error: string | null
};

export const initialUserList: UserListState = {
  users: null,
  loading: false,
  error: null
}

export const reducer = createReducer(
  initialUserList,
  on(UserListActions.loadUserList, (state, {  }) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(UserListApiActions.loadUserListSuccess, (state, { users }) => {
    return {
      ...state,
      users,
      loading: false
    }
  }),
  on(UserListApiActions.loadUserListFail, (state, {error}) => {
    return {
      ...state,
      loading: false,
      error 
    }
  }),
);

export const getData = (state: UserListState) => state.users;
export const getLoading = (state: UserListState) => state.loading;
export const getError = (state: UserListState) => state.error;