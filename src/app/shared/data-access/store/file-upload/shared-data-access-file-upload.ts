import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadService } from '../../services/file-upload.service';
import { FileUploadFacade } from './facade/file-upload.facade';
import { FileUploadEffect } from './effects/file-upload.effect';
import * as fromFileUpload from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromFileUpload.stateFeatureKey, fromFileUpload.reducers),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([FileUploadEffect])
  ],
  providers:[
    FileUploadService,
    FileUploadFacade
  ]
})
export class SharedDataAccessFileUploadModule { }
