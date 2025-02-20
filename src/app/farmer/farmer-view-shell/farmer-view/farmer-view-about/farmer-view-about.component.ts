import { Component, Input } from '@angular/core';
import { Farmer } from '../../../../shared/data-access/models/farmer/Farmer';

@Component({
  selector: 'farmer-view-about',
  templateUrl: './farmer-view-about.component.html',
  styleUrl: './farmer-view-about.component.scss'
})
export class FarmerViewAboutComponent {
@Input() farmer!: Farmer;
}
