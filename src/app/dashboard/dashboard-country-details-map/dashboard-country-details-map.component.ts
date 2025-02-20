import { Component, Input } from '@angular/core';
import { Farmer } from '../../shared/data-access/models/farmer/Farmer';
import { CountryDetail } from '../../shared/data-access/models/country/CountryDropdown';

@Component({
  selector: 'dashboard-country-details-map',
  templateUrl: './dashboard-country-details-map.component.html',
  styleUrl: './dashboard-country-details-map.component.scss'
})
export class DashboardCountryDetailsMapComponent {
  @Input() farmers!:Farmer[] | null;
  @Input() countryDetails!: CountryDetail | null;


  getTotalProducts() {
    if(!this.farmers) return;

    return this.farmers.reduce((total, farmer) => {
      return total + (farmer.products ? farmer.products.length : 0);
    }, 0);
  }
}
