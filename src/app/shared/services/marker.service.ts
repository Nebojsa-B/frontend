import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  private customIcon = L.icon({
    iconUrl: 'https://farmer-app-images.s3.us-east-1.amazonaws.com/marker-map.svg1727308641087',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48]
  });

  getDefaultIcon(): L.Icon {
    return this.customIcon;
  }
}