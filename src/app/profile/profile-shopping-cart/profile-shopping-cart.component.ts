import { Component } from '@angular/core';
import { OrderListFacade } from '../../shared/data-access/store/order/facade/order-list.facade';
import { Observable } from 'rxjs';
import { Order, OrderProduct, OrderStatus } from '../../shared/data-access/models/order/Order';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'profile-shopping-cart',
  templateUrl: './profile-shopping-cart.component.html',
  styleUrl: './profile-shopping-cart.component.scss'
})
export class ProfileShoppingCartComponent {

  orders$: Observable<Order[] | null>;
  loading$: Observable<boolean>;

  constructor(
    private orderListFacade: OrderListFacade, 
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.orderListFacade.getOrders(OrderStatus.PENDING);

    this.orders$ = this.orderListFacade.selectData$;
    this.loading$ = this.orderListFacade.selectLoading$;

    this.orderListFacade.saveSuccessActions().subscribe(data => {
      this.snackBar.open(`${data.message}`, 'Close', { duration: 3000, horizontalPosition: 'right', verticalPosition: 'top' });
    })
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  checkout() {
    this.orderListFacade.checkout();
  }

  cancelOrder(orderProduct: OrderProduct) {
    this.orderListFacade.cancelOrder(orderProduct.id);
  }

}
