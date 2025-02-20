import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as FileUploadSelectors from '../selectors/file-upload.selector';
import * as Actions from '../actions';

@Injectable()
export class FileUploadFacade {

  selectCoverImageFileUpload$ = this.store.pipe(
    select(FileUploadSelectors.selectCoverImageFileUpload)
  );

  selectProfileImageFileUpload$ = this.store.pipe(
    select(FileUploadSelectors.selectProfileImageFileUpload)
  );

  selectProductImageFileUpload$ = this.store.pipe(
    select(FileUploadSelectors.selectProductImageFileUpload)
  );

  selectFileUploadLoading$ = this.store.pipe(
    select(FileUploadSelectors.selectLoading)
  );

  selectFileUploadError$ = this.store.pipe(
    select(FileUploadSelectors.selectError)
  );

  Actions = Actions;

  constructor(private readonly store: Store) {}

  uploadCoverImage(file: File) {
    this.store.dispatch(
      Actions.FileUpload.uploadCoverImage({file})
    );
  }

  uploadProfileImage(file: File) {
    this.store.dispatch(
      Actions.FileUpload.uploadProfileImage({file})
    );
  }

  uploadProductImage(file: File) {
    this.store.dispatch(
      Actions.FileUpload.uploadProductImage({file})
    );
  }

}