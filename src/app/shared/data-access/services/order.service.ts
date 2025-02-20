import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "../../../../../environment";
import { Order, OrderStatus } from "../models/order/Order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addToShoppingCart(productId: number, quantity: number) {
    return this.http.post<Order>(`${environment.url}order/add-to-cart`, 
      {
        productId,
        quantity
      });
  }

  buyNow(productId: number, quantity: number) {
    return this.http.post<Order>(`${environment.url}order/create`, {
      productId,
      quantity
    });
  }

  getOrders(orderStatus?: OrderStatus): Observable<Order[]>{
    if(orderStatus === undefined)
      return this.http.get<Order[]>(`${environment.url}order`);

    return this.http.get<Order[]>(`${environment.url}order`, {params: {
      orderStatus: orderStatus.toString()
    }}).pipe(map(data => {
      console.log('Data: ', data);
      return data;
    }))
  }

  checkout() {
    return this.http.post(`${environment.url}order/checkout`, {});
  }

  removeOrderProduct(id: number) {
    return this.http.delete(`${environment.url}order-product/${id}`);
  }

}