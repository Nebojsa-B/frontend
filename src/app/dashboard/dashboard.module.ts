import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { LeafletMapPopupComponent } from './leaflet-map/leaflet-map-popup/leaflet-map-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { GeocodingService } from '../shared/services/geocoding.service';
import { SharedDataAccessFarmerModule } from '../shared/data-access/store/farmer/shared-data-access-farmer.module';
import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';
import { MarkerService } from '../shared/services/marker.service';
import { FarmerSearchDialogComponent } from './farmer-search-dialog/farmer-search-dialog.component';
import { FarmerSearchFormComponent } from './farmer-search-dialog/farmer-search-form/farmer-search-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardCountryDetailsMapComponent } from './dashboard-country-details-map/dashboard-country-details-map.component';

@NgModule({
  declarations: [
    LeafletMapComponent,
    LeafletMapPopupComponent,
    DashboardShellComponent,
    FarmerSearchDialogComponent,
    FarmerSearchFormComponent,
    DashboardCountryDetailsMapComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    SharedDataAccessFarmerModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  providers:[
    GeocodingService,
    MarkerService
  ],
  exports: [
    LeafletMapComponent
  ]
})
export class DashboardModule { }
