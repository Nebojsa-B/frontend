import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerViewFacade } from '../../shared/data-access/store/farmer/facade/farmer-view.facade';
import { Farmer } from '../../shared/data-access/models/farmer/Farmer';
import { Observable } from 'rxjs';
import { CustomerReviewListFacade } from '../../shared/data-access/store/customer-review/facade/customer-review-list.facade';
import { CustomerReview } from '../../shared/data-access/models/customer-review/CustomerReview';
import { AuthFacade } from '../../shared/data-access/store/auth/facade/auth.facade';
import { Profile } from '../../shared/data-access/models/auth/LogIn';
import { TranslateConfigurationService } from '../../../assets/i18n/translate-configuration.service';

@Component({
  selector: 'farmer-view-shell',
  templateUrl: './farmer-view-shell.component.html',
  styleUrl: './farmer-view-shell.component.scss'
})
export class FarmerViewShellComponent {

  farmerId = this.route.snapshot.paramMap.get('farmerId');

  farmer$!: Observable<Farmer | null>;
  customerReviews$!: Observable<CustomerReview[] | null>

  constructor(
    private route: ActivatedRoute, 
    private farmerViewFacade: FarmerViewFacade,
    private customerReviewListFacade: CustomerReviewListFacade,
    private translateConfigrationService: TranslateConfigurationService
  ) {
    if(!this.farmerId) return;

    this.farmerViewFacade.getFarmer(+this.farmerId);
    this.customerReviewListFacade.getCustomerReviews({farmerId: +this.farmerId});

    this.farmer$ = this.farmerViewFacade.selectData$;
    this.customerReviews$ = this.customerReviewListFacade.selectCustomerReviewList$;
  }
}
