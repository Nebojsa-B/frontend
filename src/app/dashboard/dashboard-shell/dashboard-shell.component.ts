import { Component } from '@angular/core';
import { FarmerListFacade } from '../../shared/data-access/store/farmer/facade/farmer-list.facade';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Farmer } from '../../shared/data-access/models/farmer/Farmer';
import { AuthFacade } from '../../shared/data-access/store/auth/facade/auth.facade';
import { CountryDetailsFacade } from '../../shared/data-access/store/country/facade/country-details.facade';
import { CountryDetail } from '../../shared/data-access/models/country/CountryDropdown';
import { TranslateConfigurationService } from '../../../assets/i18n/translate-configuration.service';

@Component({
  selector: 'app-dashboard-shell',
  templateUrl: './dashboard-shell.component.html',
  styleUrl: './dashboard-shell.component.scss'
})
export class DashboardShellComponent {

  farmers$!: Observable<Farmer[] | null>;
  loading$!: Observable<boolean>;

  countryDetails$!: Observable<CountryDetail | null>

  constructor(
    private farmerListFacade: FarmerListFacade,
    private authFacade: AuthFacade,
    private countryDetailsFacade: CountryDetailsFacade,
    private translateConfigrationService: TranslateConfigurationService
  ) {
    this.farmerListFacade.getFarmers();
    this.countryDetailsFacade.getCountryDetails();

    this.farmers$ = this.farmerListFacade.selectFarmerList$;
    this.loading$ = this.farmerListFacade.selectFarmerListLoading$;
    this.countryDetails$ = this.countryDetailsFacade.selectData$;

  }


}



