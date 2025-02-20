import { Component } from '@angular/core';
import { TranslateConfigurationService } from '../../../assets/i18n/translate-configuration.service';

@Component({
  selector: 'app-farmer-shell',
  templateUrl: './farmer-shell.component.html',
  styleUrl: './farmer-shell.component.scss'
})
export class FarmerShellComponent {

  constructor(private translateConfigurationService: TranslateConfigurationService){}
}
