import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import * as reproject from 'reproject';
import { CountryDetail } from '../../../../shared/data-access/models/country/CountryDropdown';
import { BehaviorSubject } from 'rxjs';
import { MarkerService } from '../../../../shared/services/marker.service';
import { Router } from '@angular/router';


@Component({
  selector: 'farmer-location-map',
  templateUrl: './farmer-location-map.component.html',
  styleUrl: './farmer-location-map.component.scss'
})
export class FarmerLocationMapComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() set location(value: CountryDetail | null){
    if(!value) return;
    this.locationSubject$.next(value);
  }
  @Output() pointsChanged = new EventEmitter<{lat: number, lon: number}>();

  map!: L.Map;
  tileLayer!:L.TileLayer;
  currentMarker: L.Marker | null = null;
  countryBoundaryLayer: L.GeoJSON | null = null;

  locationSubject$ = new BehaviorSubject<CountryDetail | null>(null);

  constructor(private markerService: MarkerService, private router: Router){}

  ngOnInit() {
    setTimeout(() => {
      this.map = L.map('map').setView([44.0130199055592, 20.910261524637125], 7);
    
    this.tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.map.on('click', (e: any) => {
      const {lat, lng} = e.latlng;
      this.addMarkerLayer(lat, lng);
    });

    this.locationSubject$.subscribe(data => {
      if(!data) return;

      this.applyCountryBoundary(data.geoJson);
    });
    
    }, 0);


  }

  ngAfterViewInit() {
  }

  addMarkerLayer(lat: number, lon: number) {
    if(this.currentMarker)
      this.map.removeLayer(this.currentMarker);

      // Add marker at the clicked location
      this.currentMarker = L.marker([lat, lon], { icon: this.markerService.getDefaultIcon() }).addTo(this.map);
      this.pointsChanged.emit({lat, lon});

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
