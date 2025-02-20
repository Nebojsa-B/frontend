import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetailsFacade } from '../../shared/data-access/store/user/facade/user-details.facade';
import { TranslateConfigurationService } from '../../../assets/i18n/translate-configuration.service';
import { current } from 'immer';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'profile-shell',
  templateUrl: './profile-shell.component.html',
  styleUrl: './profile-shell.component.scss'
})
export class ProfileShellComponent {

  currentUser$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(
    private router: Router,
    private userDetailsFacade: UserDetailsFacade,
    private translateConfigrationService: TranslateConfigurationService,
    private snackBar: MatSnackBar
  ) {
    this.userDetailsFacade.getUserDetails();
    this.currentUser$ = this.userDetailsFacade.selectData$;
    this.loading$ = this.userDetailsFacade.selectLoading$;

    this.currentUser$.pipe(takeUntilDestroyed()).subscribe(currentUser => {
      if(currentUser && !currentUser.farmerId)
        this.profileTabs = this.profileTabs.filter(tab => !tab.requiredFarmer);
    });

    this.userDetailsFacade.saveSuccessActions().subscribe(data => {
      this.snackBar.open(`${data.message}`, 'Close', { duration: 3000, horizontalPosition: 'right', verticalPosition: 'top' });
    })

  }

  profileTabs = [
    { name: 'PROFILE.PERSONAL_INFORMATIONS', url:'personal-informations' },
    { name: 'PROFILE.SHIPPING_ADDRESS', url: 'shipping-address' },
    { name: 'PROFILE.FARM_DETAILS', url: 'farm', requiredFarmer: true },
    { name: 'PROFILE.PRODUCTS', url: 'products', requiredFarmer: true },
    { name: 'PROFILE.SHOPPING_CART', url: 'shopping-cart' },
    { name: 'PROFILE.ORDERS', url: 'orders' },
    // { name: 'Messages', url: 'messages' },
    { name: 'Settings', url: 'settings' }
  ];

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
