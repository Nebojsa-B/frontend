import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromOrder from './reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CreateOrderEffect } from './effects/create-order.effect';
import { OrderListEffect } from './effects/order-list.effect';
import { OrderService } from '../../services/order.service';
import { CreateOrderFacade } from './facade/create-order.facade';
import { OrderListFacade } from './facade/order-list.facade';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromOrder.stateFeatureKey, fromOrder.reducers),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([CreateOrderEffect, OrderListEffect])
  ],
  providers: [OrderService, CreateOrderFacade, OrderListFacade]
})
export class SharedDataAccessOrderModule { }
