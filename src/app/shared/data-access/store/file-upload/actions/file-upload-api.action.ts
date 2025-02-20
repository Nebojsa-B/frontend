import { createAction, props } from "@ngrx/store";
import { IFileUpload } from "../../../models/file-upload/FileUpload";

export const uploadCoverImageSuccess = createAction(
  '[File Upload] Upload Cover Image File Success',
  props<{fileUpload: IFileUpload}>()
);

export const uploadCoverImageFail = createAction(
  '[File Upload] Upload Cover Image File Fail',
  props<{error: string}>()
);

export const uploadProfileImageSuccess = createAction(
  '[File Upload] Upload Profile Image File Success',
  props<{fileUpload: IFileUpload}>()
);

export const uploadProfileImageFail = createAction(
  '[File Upload] Upload Profile Image File Fail',
  props<{error: string}>()
);

export const uploadProductImageSuccess = createAction(
  '[File Upload] Upload Product Image File Success',
  props<{fileUpload: IFileUpload}>()
);

export const uploadProductImageFail = createAction(
  '[File Upload] Upload Product Image File Fail',
  props<{error: string}>()
);