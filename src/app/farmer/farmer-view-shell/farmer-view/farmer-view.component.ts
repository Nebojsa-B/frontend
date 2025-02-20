import { Component, Input } from '@angular/core';
import { Farmer, ProductMap, UserMap } from '../../../shared/data-access/models/farmer/Farmer';
import { CreateOrderFacade } from '../../../shared/data-access/store/order/facade/create-order.facade';
import { Observable } from 'rxjs';
import { CustomerReview, CustomerReviewDetails } from '../../../shared/data-access/models/customer-review/CustomerReview';
import { CustomerReviewFormFacade } from '../../../shared/data-access/store/customer-review/facade/customer-review-form.facade';
import { AuthFacade } from '../../../shared/data-access/store/auth/facade/auth.facade';
import { Profile } from '../../../shared/data-access/models/auth/LogIn';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'farmer-view',
  templateUrl: './farmer-view.component.html',
  styleUrl: './farmer-view.component.scss'
})
export class FarmerViewComponent {
  @Input() farmer!: Farmer | null;
  @Input() customerReviews!: CustomerReview[] | null;

  @Input() farmerId!: string | null;

  currentUser$!: Observable<Profile | null>;
  loading$: Observable<boolean>;

  constructor(
    private createOrderFacade: CreateOrderFacade,
    private customerReviewFormFacade: CustomerReviewFormFacade,
    private authFacade: AuthFacade,
    private snackBar: MatSnackBar
  ){
    this.currentUser$ = this.authFacade.selectUserLoginResponse$;
    this.loading$ = this.createOrderFacade.selectLoading$;

    this.createOrderFacade.saveSuccessActions().subscribe(data => {
      this.snackBar.open(`${data.message}`, 'Close', { duration: 3000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: 'custom-snackbar' });
    })
  }

  addToCart(event: {productId: number, quantity: number}) {
    const {productId, quantity} = event;
    this.createOrderFacade.addToShoppingCart(productId, quantity);
  }

  buyNow(event: {productId: number, quantity: number}) {
    const {productId, quantity} = event;

    this.createOrderFacade.buyNow(productId, quantity);
  }

  createCustomerReview(customerReview: CustomerReviewDetails, user: Profile | null){
    if(!this.farmerId || !user) return;
    
    this.customerReviewFormFacade.createCustomerReview(+this.farmerId, {
      ...customerReview,
      createdAt: new Date(),
      user
    });
  }
}
