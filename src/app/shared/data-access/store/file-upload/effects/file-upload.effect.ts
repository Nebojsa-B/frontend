import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FileUpload, FileUploadApi } from "../actions";
import { catchError, map, of, switchMap } from "rxjs";
import { FileUploadService } from "../../../services/file-upload.service";

@Injectable()
export class FileUploadEffect {
  $coverImageFileUpload = createEffect(() =>
    this.actions$.pipe(
      ofType(FileUpload.uploadCoverImage),
    switchMap(({file}) => this.fileUploadService.uploadFile(file).pipe(
      map((fileUpload) => {
        return FileUploadApi.uploadCoverImageSuccess({fileUpload})
      }),
      catchError((error) => {
        return of(FileUploadApi.uploadCoverImageFail({error}))
      })
    ))
    )
  );

  $profileImageFileUpload = createEffect(() =>
    this.actions$.pipe(
      ofType(FileUpload.uploadProfileImage),
    switchMap(({file}) => this.fileUploadService.uploadFile(file).pipe(
      map((fileUpload) => {
        return FileUploadApi.uploadProfileImageSuccess({fileUpload})
      }),
      catchError((error) => {
        return of(FileUploadApi.uploadProfileImageFail({error}))
      })
    ))
    )
  );

  $productImageFileUpload = createEffect(() =>
    this.actions$.pipe(
      ofType(FileUpload.uploadProductImage),
    switchMap(({file}) => this.fileUploadService.uploadFile(file).pipe(
      map((fileUpload) => {
        return FileUploadApi.uploadProductImageSuccess({fileUpload})
      }),
      catchError((error) => {
        return of(FileUploadApi.uploadProductImageFail({error}))
      })
    ))
    )
  );

  constructor(
    private actions$: Actions,
    private fileUploadService: FileUploadService
  ) {}
}