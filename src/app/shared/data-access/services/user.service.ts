import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environment";
import { FarmDetails, LocationDetails, ProductDetails, UserDetails } from "../models/user/UserDetails";
import { Observable } from "rxjs";
import { PersonalDetails } from "../models/auth/LogIn";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getCurrentUser():Observable<UserDetails> {
    return this.http.get<UserDetails>(`${environment.url}user/current-user`);
  }

  updateUserPersonalDetails(userPersonalDetails: PersonalDetails) {
    return this.http.patch<PersonalDetails>(`${environment.url}user/${userPersonalDetails.id}`, {
      ...userPersonalDetails
    })
  }

  updateLocationDetails(locationDetails: LocationDetails) {
    return this.http.patch<LocationDetails>(`${environment.url}location/${locationDetails.id}`, {...locationDetails});
  }

  updateFarmDetails(farmDetails: FarmDetails){
    return this.http.patch<FarmDetails>(`${environment.url}farm/${farmDetails.id}`, {...farmDetails})
  }

  addProductToFarmer(farmerId: number, productDetails: ProductDetails){
    return this.http.post<ProductDetails>(`${environment.url}product/add-product-to/${farmerId}`, {
      ...productDetails
    })
  }

  getUsers() {
    return this.http.get<UserDetails[]>(`${environment.url}user`)
  }

}