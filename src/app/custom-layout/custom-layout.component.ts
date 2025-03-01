import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, startWith } from 'rxjs';
import {CountryDropdownDataWithLoading } from '../shared/data-access/models/country/CountryDropdown';
import { CountryDropdownFacade } from '../shared/data-access/store/country/facade/country-dropdown.facade';
import { AuthFacade } from '../shared/data-access/store/auth/facade/auth.facade';
import { Profile } from '../shared/data-access/models/auth/LogIn';
import { MatDialog } from '@angular/material/dialog';
import { FarmerSearchDialogComponent } from '../dashboard/farmer-search-dialog/farmer-search-dialog.component';
import { FarmerListFacade } from '../shared/data-access/store/farmer/facade/farmer-list.facade';
import { Languages, TranslateConfigurationService } from '../../assets/i18n/translate-configuration.service';

enum DashboardMenu {
  Language = 1,
  ShoppingCart,
  DarkMode,
  SignOut,
}

@Component({
  selector: 'app-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrl: './custom-layout.component.scss'
})
export class CustomLayoutComponent {

  Languages = Languages;
  countries$!: Observable<CountryDropdownDataWithLoading | null>;
  user$!: Observable<Profile | null>;

  hasQueryParams$;
  DashboardMenu = DashboardMenu;

  isDashboard!: boolean;
  
  dashboardMenu = [
    { id: DashboardMenu.Language, name: 'DASHBOARD.LANGUAGE', isSubMenu: true, icon: 'translate'},
    { id: DashboardMenu.ShoppingCart, name: 'DASHBOARD.SHOPPING_CART', icon: 'shopping_cart' },
    { id: DashboardMenu.DarkMode, name: 'DASHBOARD.DARK_MODE', icon: 'dark_mode'},
    { id: DashboardMenu.SignOut, name: 'DASHBOARD.SIGN_OUT', icon: 'logout'}
  ];

  constructor(
    private router: Router,
    public route: ActivatedRoute, 
    private countryDropdownFacade: CountryDropdownFacade,
    private authFacade: AuthFacade,
    private farmerListFacade: FarmerListFacade,
    private dialog: MatDialog,
    private translateConfigurationService: TranslateConfigurationService
  ) {

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd)
        this.isDashboard = event.url.includes('dashboard');
    }
    );

    this.hasQueryParams$ = this.route.queryParams.pipe(
      map(data => data && Object.keys(data).length > 0)
    );

    this.countryDropdownFacade.getCountryDropdown();
    this.countries$ = this.countryDropdownFacade.selectDataWithLoading$;
    this.user$ = this.authFacade.selectUserLoginResponse$;

    this.user$.subscribe(data => console.log('Data: ', data));

    this.authFacade.signOutSuccessAction().pipe(takeUntilDestroyed()).subscribe(() => {
      location.reload();
    })  
  }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

  switchLanguage(lng: Languages){
    this.translateConfigurationService.setLanguage(lng);
  }

  handleDashboardMenuItem(menuItemId: number){
    switch(menuItemId){
      case DashboardMenu.SignOut: this.logout();break;
      case DashboardMenu.Language: console.log('Need implementation');break;
      case DashboardMenu.DarkMode: console.log('Need implementation');break;
      case DashboardMenu.ShoppingCart: this.router.navigateByUrl('profile/shopping-cart');break;
    }
  }

  logout() {
    this.authFacade.signOut();
  }

  viewProfile() {
    this.router.navigateByUrl('profile');
  }

  shortcutName(user: Profile | null){
    if(!user) return;

    return user.firstName.slice(0,1) + user.lastName.slice(0,1);
  }

  openSearchDialog() {
    this.dialog.open(FarmerSearchDialogComponent);
  }

}
