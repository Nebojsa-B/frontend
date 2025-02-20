import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment';
import { CountryDetail, CountryDropdown } from '../models/country/CountryDropdown';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountryDropdown(): Observable<CountryDropdown[]>{
    return this.http.get<CountryDropdown[]>(`${environment.url}country/dropdown`);
  }

  getCountry(id: number): Observable<CountryDetail>{
    return this.http.get<CountryDetail>(`${environment.url}country/${id}`);
  }

  getCountryBasedOnUser(): Observable<CountryDetail>{
    return this.http.get<CountryDetail>(`${environment.url}country/based-on-user`);
  }

  getCountries(): Observable<CountryDetail[]>{
    return this.http.get<CountryDetail[]>(`${environment.url}country`);
  }

}
