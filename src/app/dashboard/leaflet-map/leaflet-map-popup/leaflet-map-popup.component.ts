import { Component, Input } from '@angular/core';
import { Farmer } from '../../../shared/data-access/models/farmer/Farmer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaflet-map-popup',
  templateUrl: './leaflet-map-popup.component.html',
  styleUrl: './leaflet-map-popup.component.scss'
})
export class LeafletMapPopupComponent {
  @Input() farmer!: Farmer;
  isHover = false;

  constructor(private router: Router){}

  viewFarmer(farmerId: number){
    this.router.navigateByUrl(`farmer/view/${farmerId}`)
  }
}
