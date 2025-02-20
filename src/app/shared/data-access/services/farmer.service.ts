import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Farmer, FarmerParams, FarmerSave } from '../models/farmer/Farmer';
import { environment } from '../../../../../environment';
import { Observable } from 'rxjs';
import { SearchQueryParams } from '../models/farmer/Search';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http: HttpClient) { }

  getFarmers(params?: SearchQueryParams): Observable<Farmer[]> {
    return this.http.get<Farmer[]>(`${environment.url}farmer`, {
      params: {...params}
    })
  }

  createFarmer(farmerSave: FarmerSave):Observable<FarmerSave>{
    return this.http.post<FarmerSave>(`${environment.url}farmer`,
    {
      ...farmerSave
    },
    )
  }

  getFarmer(farmerId: number): Observable<Farmer> {
    return this.http.get<Farmer>(`${environment.url}farmer/${farmerId}`);
  }
}
