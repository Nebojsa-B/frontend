import { Component } from '@angular/core';
import { CountryDropdownFacade } from '../../shared/data-access/store/country/facade/country-dropdown.facade';
import { TranslateConfigurationService } from '../../../assets/i18n/translate-configuration.service';

@Component({
  selector: 'app-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrl: './auth-shell.component.scss'
})
export class AuthShellComponent {

  constructor(
    private countryDropdownFacade: CountryDropdownFacade, 
    private translateConfigrationService: TranslateConfigurationService) {
    this.countryDropdownFacade.getCountryDropdown();
  }
}
