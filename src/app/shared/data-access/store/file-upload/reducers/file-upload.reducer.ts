import { createReducer, on } from '@ngrx/store';
import { FileUpload, FileUploadApi } from '../actions';
import { IFileUpload } from '../../../models/file-upload/FileUpload';

export const fileUploadFeatureKey = 'fileUpload';

export interface FileUploadState {
  coverImageFileUpload: IFileUpload | null;
  profileImageFileUpload: IFileUpload | null;
  productImageFileUpload: IFileUpload | null;
  loading: boolean;
  error: string | null;
}

export const initialState: FileUploadState = {
  coverImageFileUpload: null,
  profileImageFileUpload: null,
  productImageFileUpload: null,
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(FileUpload.uploadCoverImage, (state, { file }) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(FileUploadApi.uploadCoverImageSuccess, (state, { fileUpload }) => {
    return {
      ...state,
      coverImageFileUpload: fileUpload,
      loading: false,
      error: null,
    };
  }),
  on(FileUploadApi.uploadCoverImageFail, (state, action) => {
    return {
      ...initialState,
      error: action.error,
      loading: false
    };
  }),
  on(FileUpload.uploadProfileImage, (state, { file }) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(FileUploadApi.uploadProfileImageSuccess, (state, { fileUpload }) => {
    return {
      ...state,
      profileImageFileUpload: fileUpload,
      loading: false,
      error: null,
    };
  }),
  on(FileUploadApi.uploadProfileImageFail, (state, action) => {
    return {
      ...initialState,
      error: action.error,
      loading: false
    };
  }),
  on(FileUpload.uploadProductImage, (state, { file }) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(FileUploadApi.uploadProductImageSuccess, (state, { fileUpload }) => {
    return {
      ...state,
      productImageFileUpload: fileUpload,
      loading: false,
      error: null,
    };
  }),
  on(FileUploadApi.uploadProductImageFail, (state, action) => {
    return {
      ...initialState,
      error: action.error,
      loading: false
    };
  }),
)

export const getCoverImageFileUpload = (state: FileUploadState) => state.coverImageFileUpload;

export const getProfileImageFileUpload = (state: FileUploadState) => state.profileImageFileUpload;

export const getProductImageFileUpload = (state: FileUploadState) => state.productImageFileUpload;

export const getError = (state: FileUploadState) => state.error;

export const getLoading = (state: FileUploadState) => state.loading;

