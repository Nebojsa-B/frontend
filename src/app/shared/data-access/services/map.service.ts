import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment';
import { GeoCodingResponse } from '../models/map/Geocoding';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getAddressFromMapBy(latitude: number, longitude: number) {
    return this.http.get<any>(`${environment.url}shared/reverse-geocoding`, {
      params: {
        latitude,
        longitude
      }
    });
  }

  getCoordinatesForMapBy(city: string, address: string): Observable<GeoCodingResponse[]> {
    return this.http.post<GeoCodingResponse[]>(`${environment.url}shared/coordinates-for-map`, {
      city,
      address
    })
  }

}
