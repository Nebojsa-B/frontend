
// 
import { Component, ComponentRef, ElementRef, Input, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { LeafletMapPopupComponent } from './leaflet-map-popup/leaflet-map-popup.component';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Farmer } from '../../shared/data-access/models/farmer/Farmer';
import * as reproject from 'reproject';
import { CountryDetail } from '../../shared/data-access/models/country/CountryDropdown';
import { MarkerService } from '../../shared/services/marker.service';


@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.scss'
})
export class LeafletMapComponent implements OnInit, OnDestroy {
  @ViewChild('markerPopup') public markerPopupTemplateRef!: TemplateRef<ElementRef>;
  componentRef!: ComponentRef<LeafletMapPopupComponent>;

  @Input() farmers!: Farmer[] | null;
  @Input()  countryDetails!: CountryDetail;


  map!: L.Map;
  tileLayer!: L.TileLayer;
  markers = new L.MarkerClusterGroup();

  constructor(
    private vcr: ViewContainerRef,
    private http: HttpClient,
    private markerService: MarkerService
  ) {}

  ngOnInit() {
    this.map = L.map('map').setView([44.0130199055592, 20.910261524637125], 7);
    
    this.tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.generateMarkers(this.farmers);
    this.applyCountryBoundary(this.countryDetails);
  }

  generateMarkers(farmers: Farmer[] | null) {
    if (!farmers) return;

  farmers.forEach(farmer => {
    if (!farmer.user) return;

    // Create a marker for the farmer's location
    const marker = L.marker([farmer.user.location.lat, farmer.user.location.lng], {icon: this.markerService.getDefaultIcon()});

    // Create a new popup for each marker
    const unifiedPopup = L.popup({
      offset: L.point(0, -20),
      minWidth: 200
    });

    // Bind the popup to the marker and open it on click
    marker.on('click', () => {
      
      const componentRef = this.vcr.createComponent(LeafletMapPopupComponent);
      componentRef.instance.farmer = farmer;

      const popupContent = componentRef.location.nativeElement;

      unifiedPopup
        .setLatLng(marker.getLatLng())
        .setContent(popupContent)
        .openOn(this.map);
    });

    // Add the marker with popup to the map
    this.markers.addLayer(marker);
  });

  // Add the marker layer to the map
  this.map.addLayer(this.markers);
  }

  applyCountryBoundary(countryDetail: CountryDetail) {
    const countryGeoJson = JSON.parse(countryDetail.geoJson);
      
    const countryBoundary =  reproject.reverse(countryGeoJson);

    if(this.map){
  var countryPolygon = L.polygon(countryBoundary.coordinates, {
      color: '#1B4D3E',
      fillOpacity: 0,
  }).addTo(this.map);

    this.map.fitBounds(countryBoundary.coordinates);
  }
  }

  findCommonCoordinates(coords1: any[], coords2: any[]): any[] {
    const set1 = new Set(coords1.map(coord => JSON.stringify(coord)));
    const set2 = new Set(coords2.map(coord => JSON.stringify(coord)));

    const commonCoordinates = [...set1].filter(item => set2.has(item)).map(item => JSON.parse(item));
    return commonCoordinates;
  }

  ngOnDestroy(): void {
        this.map.remove();
  }
}
