import * as fromUploadFile from './file-upload.reducer';
import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

export const stateFeatureKey = 'fileUpload';

export interface State {
  [fromUploadFile.fileUploadFeatureKey]: fromUploadFile.FileUploadState;
}

export function reducers(state: State, action: Action) {
  return combineReducers({
    [fromUploadFile.fileUploadFeatureKey]: fromUploadFile.reducer,
  })(state, action);
}

export const selectState = createFeatureSelector<State>(stateFeatureKey);