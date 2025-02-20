import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileShellComponent } from "./profile-shell/profile-shell.component";
import { ProfileOverviewComponent } from "./profile-overview/profile-overview.component";
import { ProfileShoppingCartComponent } from "./profile-shopping-cart/profile-shopping-cart.component";
import { ProfileMessagesComponent } from "./profile-messages/profile-messages.component";
import { ProfileOrdersComponent } from "./profile-orders/profile-orders.component";
import { ProfileSettingsComponent } from "./profile-settings/profile-settings.component";
import { ProfilePersonalInformationsComponent } from "./profile-personal-informations/profile-personal-informations.component";
import { ProfileShippingAddressComponent } from "./profile-shipping-address/profile-shipping-address.component";
import { ProfileFarmComponent } from "./profile-farm/profile-farm.component";
import { ProfileProductsComponent } from "./profile-products/profile-products.component";

const routes: Routes = [
  { path: '', redirectTo: 'personal-informations', pathMatch: 'full' },
  {
    path: '',
    component: ProfileShellComponent,
    children: [
      { path: 'personal-informations', component: ProfilePersonalInformationsComponent },
      { path: 'shipping-address', component: ProfileShippingAddressComponent },
      { path: 'farm', component: ProfileFarmComponent },
      { path: 'products', component: ProfileProductsComponent },
      { path: 'shopping-cart', component: ProfileShoppingCartComponent },
      { path: 'messages', component: ProfileMessagesComponent },
      { path: 'orders', component: ProfileOrdersComponent },
      { path: 'settings', component: ProfileSettingsComponent }
    ],
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }