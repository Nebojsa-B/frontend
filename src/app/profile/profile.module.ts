import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileShellComponent } from './profile-shell/profile-shell.component';
import { ProfileTabsComponent } from '../profile-tabs/profile-tabs.component';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { ProfileShoppingCartComponent } from './profile-shopping-cart/profile-shopping-cart.component';
import { ProfileOrdersComponent } from './profile-orders/profile-orders.component';
import { ProfileMessagesComponent } from './profile-messages/profile-messages.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FarmerModule } from '../farmer/farmer.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedDataAccessOrderModule } from '../shared/data-access/store/order/sahred-data-access-order.module';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProfilePersonalInformationsComponent } from './profile-personal-informations/profile-personal-informations.component';
import { ProfileShippingAddressComponent } from './profile-shipping-address/profile-shipping-address.component';
import { ProfileFarmComponent } from './profile-farm/profile-farm.component';
import { ProfileProductsComponent } from './profile-products/profile-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileUploadImagesComponent } from './profile-upload-images/profile-upload-images.component';
import { ImageUploadDirective } from './directives/image-upload.directive';
import { SharedDataAccessUserModule } from '../shared/data-access/store/user/shared-data-access-user.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileProductsAccordionComponent } from './profile-products/profile-products-accordion/profile-products-accordion.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReportContentComponent } from './report-content/report-content.component';

@NgModule({
  declarations: [
    ProfileShellComponent,
    ProfileTabsComponent,
    ProfileOverviewComponent,
    ProfileShoppingCartComponent,
    ProfileOrdersComponent,
    ProfileMessagesComponent,
    ProfileSettingsComponent,
    ProfilePersonalInformationsComponent,
    ProfileShippingAddressComponent,
    ProfileFarmComponent,
    ProfileProductsComponent,
    ProfileUploadImagesComponent,
    ImageUploadDirective,
    ProfileProductsAccordionComponent,
    ReportContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    MatTabsModule,
    FarmerModule,
    MatButtonModule,
    MatInputModule,
    SharedDataAccessOrderModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    ReactiveFormsModule,
    SharedDataAccessUserModule,
    TranslateModule,
    SharedModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatSnackBarModule
  ]
})
export class ProfileModule { }
