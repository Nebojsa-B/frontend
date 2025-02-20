import { Injectable } from "@angular/core";
import { ActionsSubject, select, Store } from "@ngrx/store";
import * as Actions from '../actions';
import * as UserDetailsSelectors from '../selectors/user-details.selectors';
import { ofType } from "@ngrx/effects";
import { PersonalDetails } from "../../../models/auth/LogIn";
import { FarmDetails, LocationDetails, ProductDetails } from "../../../models/user/UserDetails";

@Injectable()
export class UserDetailsFacade {

  selectLoading$ = this.store.pipe(
    select(UserDetailsSelectors.selectUserDetailsLoading)
  );

  selectData$ = this.store.pipe(
    select(UserDetailsSelectors.selectUserDetailsData)
  );

  selectPersonalDetails$ = this.store.pipe(
    select(UserDetailsSelectors.selectUserDetailsPersonalInformation)
  );

  selectUserDetailsLocation$ = this.store.pipe(
    select(UserDetailsSelectors.selectUserDetailsLocation)
  );

  selectUserDetailsFarm$ = this.store.pipe(
    select(UserDetailsSelectors.selectUserDetailsFarm)
  );

  selectUserDetailsProducts$ = this.store.pipe(
    select(UserDetailsSelectors.selectUserDetailsProducts)
  );

  selectError$ = this.store.pipe(
    select(UserDetailsSelectors.selectUserDetailsError)
  )


  Actions = Actions
  constructor(
    private readonly store: Store,
    private actionsListener$: ActionsSubject
  ) {}

  getUserDetails() {
    this.store.dispatch(Actions.UserDetailsActions.loadUserDetails())
  }

  updatePersonalDetails(personalDetails: PersonalDetails) {
   this.store.dispatch(Actions.UserDetailsActions.updatePersonalDetails({ personalDetails })) 
  }

  updateLocation(locationDetails: LocationDetails){
    this.store.dispatch(Actions.UserDetailsActions.updateUserLocationDetails({locationDetails}));
  }

  updateFarm(farmDetails: FarmDetails) {
    this.store.dispatch(Actions.UserDetailsActions.updateUserFarmDetails({farmDetails}))
  }

  addProductToFarmer(farmerId: number, productDetails: ProductDetails){
    this.store.dispatch(Actions.UserDetailsActions.addProductToFarmer({farmerId, productDetails}));
  }

  saveSuccessActions() {
    return this.actionsListener$.pipe(
      ofType(
        Actions.UserDetailsApiActions.updateUserLocationDetailsSuccess,
        Actions.UserDetailsApiActions.updateUserPersonalDetailsSuccess,
        Actions.UserDetailsApiActions.addProductToFarmerSuccss,
        Actions.UserDetailsApiActions.updateUserFarmDetailsSuccess
      )
    )
  }
}