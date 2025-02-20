import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomerReview, CustomerReviewDetails, CustomerReviewParams } from "../models/customer-review/CustomerReview";
import { environment } from "../../../../../environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerReviewService {

  constructor(private http: HttpClient) { }

  createCustomerReview(farmerId: number, customerReview: CustomerReviewDetails) {
    return this.http.post<CustomerReviewDetails>(`${environment.url}review`, 
      {
        farmerId,
        ...customerReview
      });
  }

  getCustomerReviews(params: CustomerReviewParams) {
    return this.http.get<CustomerReview[]>(`${environment.url}review/farmer/${params.farmerId}`);
  }

  removeCustomerReview(id: number) {
    return this.http.delete(`${environment.url}review/${id}`)
  }

}