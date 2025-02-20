import { createSelector } from '@ngrx/store';
import * as fromState from '../reducers';
import * as fromFileUpload from '../reducers/file-upload.reducer';

const selectFileUploadState = createSelector(
  fromState.selectState,
  (state) => state[fromFileUpload.fileUploadFeatureKey]
);

export const selectLoading = createSelector(
  selectFileUploadState,
  fromFileUpload.getLoading
);

export const selectError = createSelector(
  selectFileUploadState,
  fromFileUpload.getError
);

export const selectCoverImageFileUpload = createSelector(
  selectFileUploadState,
  fromFileUpload.getCoverImageFileUpload
);

export const selectProfileImageFileUpload = createSelector(
  selectFileUploadState,
  fromFileUpload.getProfileImageFileUpload
);

export const selectProductImageFileUpload = createSelector(
  selectFileUploadState,
  fromFileUpload.getProductImageFileUpload
);