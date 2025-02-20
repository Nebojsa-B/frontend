import { createSelector } from '@ngrx/store';
import * as fromUserList from '../reducers/user-list.reducer';
import * as fromUser from '../reducers';

const selectUserListState = createSelector(
  fromUser.selectState,
  (state) => state[fromUserList.userListFeatureKey]
);

export const selectUserListData = createSelector(
  selectUserListState,
  fromUserList.getData
);

export const selectUserListLoading = createSelector(
  selectUserListState,
  fromUserList.getLoading
)

export const selectUserListError = createSelector(
  selectUserListState,
  fromUserList.getError
);