import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { LocationMap } from '../../../../shared/data-access/models/farmer/Farmer';
import { MarkerService } from '../../../../shared/services/marker.service';
import * as L from 'leaflet';
import * as reproject from 'reproject';

@Component({
  selector: 'farmer-view-map',
  templateUrl: './farmer-view-map.component.html',
  styleUrl: './farmer-view-map.component.scss'
})
export class FarmerViewMapComponent implements AfterViewInit, OnDestroy {
@Input() location!: LocationMap;

map!: L.Map;
tileLayer!:L.TileLayer;
currentMarker: L.Marker | null = null;
countryBoundaryLayer: L.GeoJSON | null = null;


constructor(private markerService: MarkerService){}

ngAfterViewInit() {
  this.map = L.map('map').setView([this.location.country.lat, this.location.country.lng], this.location.country.zoom);
  
  this.tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(this.map);

  this.applyCountryBoundary(this.location.country.geoJson);
  this.addMarkerLayer(this.location.lat, this.location.lng);

}

addMarkerLayer(lat: number, lon: number) {
  if(this.currentMarker)
    this.map.removeLayer(this.currentMarker);

    // Add marker at the clicked location
    this.currentMarker = L.marker([lat, lon], { icon: this.markerService.getDefaultIcon() }).addTo(this.map);

}


applyCountryBoundary(geoJson: string) {
  if(!geoJson) return;

  const countryGeoJson = JSON.parse(geoJson);
    
  const countryBoundary =  reproject.reverse(countryGeoJson);

  L.polygon(countryBoundary.coordinates, {
    color: '#1B4D3E',
    fillOpacity: 0,
}).addTo(this.map);

// Fit the map to the bounds of the polygon (Serbia)
this.map.fitBounds(countryBoundary.coordinates);

}

ngOnDestroy(): void {
    if(this.map)
      this.map.remove();
}
}
