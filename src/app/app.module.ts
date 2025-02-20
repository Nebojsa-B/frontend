import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { MatSelectModule } from '@angular/material/select';
import { SharedDataAccessCountryModule } from './shared/data-access/store/country/shared-data-access-country.module';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHttpInterceptor } from './with-credentials.interceptor';
import { AuthFacade } from './shared/data-access/store/auth/facade/auth.facade';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedAuthDataAccessModule } from './shared/data-access/store/auth/shared-data-access-auth.module';
import {MatMenuModule} from '@angular/material/menu';
import { SharedDataAccessFarmerModule } from './shared/data-access/store/farmer/shared-data-access-farmer.module';
import { UtilI18nModule } from '../assets/i18n/utilI18n.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    CustomLayoutComponent,
  ],
  imports: [
    BrowserModule,
    UtilI18nModule,
    TranslateModule,
    AppRoutingModule,
    MatTooltipModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    SharedAuthDataAccessModule,
    MatSelectModule,
    SharedDataAccessCountryModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    StoreDevtoolsModule.instrument(),
    MatMenuModule,
    SharedDataAccessFarmerModule
    
  ],
  providers: [
    provideAnimationsAsync(),
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ErrorHttpInterceptor, 
      multi: true 
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (authFacade: AuthFacade) => {
        return () => {
          //get user data on load
          authFacade.isLoggedIn();
        };
      },
      multi: true,
      deps: [AuthFacade],
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { subscriptSizing: 'dynamic' }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
