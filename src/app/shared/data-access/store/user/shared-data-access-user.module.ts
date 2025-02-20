import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import * as fromUser from './reducers';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { UserDetailsEffect } from "./effects/user-details.effects";
import { UserService } from "../../services/user.service";
import { UserDetailsFacade } from "./facade/user-details.facade";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UserListEffect } from "./effects/user-list.effects";
import { UserListFacade } from "./facade/user-list.facade";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.stateFeatureKey, fromUser.reducers),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([UserDetailsEffect, UserListEffect]),
    MatSnackBarModule
  ],
  providers: [UserService, UserDetailsFacade, UserListFacade]
})
export class SharedDataAccessUserModule { }