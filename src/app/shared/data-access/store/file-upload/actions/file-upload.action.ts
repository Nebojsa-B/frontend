import { createAction, props } from "@ngrx/store";

export const uploadCoverImage = createAction(
  '[File Upload] Upload Cover Image',
  props<{ file: File }>()
);

export const uploadProfileImage = createAction(
  '[File Upload] Upload Profile Image',
  props<{ file: File }>()
);

export const uploadProductImage = createAction(
  '[File Upload] Upload Product Image',
  props<{ file: File }>()
);
