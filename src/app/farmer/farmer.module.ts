import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerShellComponent } from './farmer-shell/farmer-shell.component';
import { FarmerCreateEditComponent } from './farmer-create-edit/farmer-create-edit.component';
import { FarmerRoutingModule } from './farmer-routing.module';
import { MatInputModule } from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedDataAccessCountryModule } from '../shared/data-access/store/country/shared-data-access-country.module';
import { MatSelectModule } from '@angular/material/select';
import { SharedDataAccessFarmerModule } from '../shared/data-access/store/farmer/shared-data-access-farmer.module';
import { FarmerViewComponent } from './farmer-view-shell/farmer-view/farmer-view.component';
import { FarmerUploadAssetsComponent } from './farmer-create-edit/farmer-upload-assets/farmer-upload-assets.component';
import { FarmerPersonalDetailsFormComponent } from './farmer-create-edit/farmer-personal-details-form/farmer-personal-details-form.component';
import { FarmerFarmDetailsFormComponent } from './farmer-create-edit/farmer-farm-details-form/farmer-farm-details-form.component';
import { FarmerLocationFormComponent } from './farmer-create-edit/farmer-location-form/farmer-location-form.component';
import { FarmerLocationMapComponent } from './farmer-create-edit/farmer-location-form/farmer-location-map/farmer-location-map.component';
import { FarmerProductsFormComponent } from './farmer-create-edit/farmer-products-form/farmer-products-form.component';
import { FarmerProductsAccordionComponent } from './farmer-create-edit/farmer-products-form/farmer-products-accordion/farmer-products-accordion.component';
import { ImageUploadDirective } from './directives/image-upload.directive';
import { SharedDataAccessFileUploadModule } from '../shared/data-access/store/file-upload/shared-data-access-file-upload';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CyrillicToLatinPipe } from './pipes/cyrillic-to-latin.pipe';
import { FarmerViewShellComponent } from './farmer-view-shell/farmer-view-shell.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FarmerViewProductsComponent } from './farmer-view-shell/farmer-view/farmer-view-products/farmer-view-products.component';
import { FarmerViewMapComponent } from './farmer-view-shell/farmer-view/farmer-view-map/farmer-view-map.component';
import { FarmerViewCustomerReviewsComponent } from './farmer-view-shell/farmer-view/farmer-view-customer-reviews/farmer-view-customer-reviews.component';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SharedDataAccessOrderModule } from '../shared/data-access/store/order/sahred-data-access-order.module';
import { FarmerViewCustomerReviewDialogComponent } from './farmer-view-shell/farmer-view/farmer-view-customer-reviews/farmer-view-customer-review-dialog/farmer-view-customer-review-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { SharedDataAccessCustomerReviewModule } from '../shared/data-access/store/customer-review/shared-data-access-customer-review.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FarmerViewAboutComponent } from './farmer-view-shell/farmer-view/farmer-view-about/farmer-view-about.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    FarmerShellComponent,
    FarmerCreateEditComponent,
    FarmerViewComponent,
    FarmerUploadAssetsComponent,
    FarmerPersonalDetailsFormComponent,
    FarmerFarmDetailsFormComponent,
    FarmerLocationFormComponent,
    FarmerLocationMapComponent,
    FarmerProductsFormComponent,
    FarmerProductsAccordionComponent,
    ImageUploadDirective,
    CyrillicToLatinPipe,
    FarmerViewShellComponent,
    FarmerViewProductsComponent,
    FarmerViewMapComponent,
    FarmerViewCustomerReviewsComponent,
    FarmerViewCustomerReviewDialogComponent,
    StarRatingComponent,
    FarmerViewAboutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FarmerRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    SharedDataAccessCountryModule,
    MatSelectModule,
    SharedDataAccessFarmerModule,
    SharedDataAccessFileUploadModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatIconModule,
    MatProgressBarModule,
    SharedDataAccessOrderModule,
    MatDialogModule,
    SharedDataAccessCustomerReviewModule,
    MatTooltipModule,
    TranslateModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
    MatDatepickerModule
  ],
  exports: [
    FarmerUploadAssetsComponent,
    FarmerPersonalDetailsFormComponent,
    FarmerLocationFormComponent,
    FarmerFarmDetailsFormComponent
  ]
})
export class FarmerModule { }
