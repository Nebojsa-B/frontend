import { Farmer, ProductMap, UserMap } from "../farmer/Farmer";

export interface Order {
  id: number;
  user: UserMap;
  farmer: Farmer;
  orderProducts: OrderProduct[];
  totalPrice: number;
  orderStatus: OrderStatus;
  createdAt: Date;
}

export enum OrderStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED'
}

export interface OrderProduct {
    id: number;
    order: Order;
    product: ProductMap;
    quantity: number;
    price: number;
}