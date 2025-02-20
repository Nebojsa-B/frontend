import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  geoJsonApi = 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json';
  constructor(private http: HttpClient) { }

  loadGeojson() {
    return this.http.get(this.geoJsonApi);
  }
}
