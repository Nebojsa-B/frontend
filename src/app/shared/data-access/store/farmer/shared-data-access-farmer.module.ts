import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerService } from '../../services/farmer.service';
import { EffectsModule } from '@ngrx/effects';
import { FarmerFormEffect } from './effects/farmer-form.effect';
import { StoreModule } from '@ngrx/store';
import * as fromFarmer from './reducers';
import { FarmerFormFacade } from './facade/farmer-form.facade';
import { FarmerListEffects } from './effects/farmer-list.effect';
import { FarmerListFacade } from './facade/farmer-list.facade';
import { FarmerViewEffect } from './effects/farmer-view.effect';
import { FarmerViewFacade } from './facade/farmer-view.facade';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromFarmer.stateFeatureKey, fromFarmer.reducers),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([FarmerFormEffect, FarmerListEffects, FarmerViewEffect])
  ],
  providers: [FarmerService, FarmerFormFacade, FarmerListFacade,FarmerViewFacade]
})
export class SharedDataAccessFarmerModule { }
