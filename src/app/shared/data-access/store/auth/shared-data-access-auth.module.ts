import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AuthEffect } from './effects/auth.effect';
import { AuthFacade } from './facade/auth.facade';
import { AuthService } from '../../services/auth.service';
import * as fromAuth from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.stateFeatureKey, fromAuth.reducers),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([
      AuthEffect,
    ]),
    HttpClientModule,
  ],
  providers: [
    AuthFacade,
    AuthService
  ],
})
export class SharedAuthDataAccessModule {}