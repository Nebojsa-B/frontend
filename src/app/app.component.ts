import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigurationService } from '../assets/i18n/translate-configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  constructor(
    private translateConfigrationService: TranslateConfigurationService) {
  }3
}
