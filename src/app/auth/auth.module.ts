import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthShellComponent } from './auth-shell/auth-shell.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedAuthDataAccessModule } from '../shared/data-access/store/auth/shared-data-access-auth.module';
import { LoginGuard } from './guards/login.guard';
import {MatSelectModule} from '@angular/material/select';
import { RegistrationComponent } from './registration/registration.component'
import { SharedDataAccessCountryModule } from '../shared/data-access/store/country/shared-data-access-country.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    LoginComponent,
    AuthShellComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SharedAuthDataAccessModule,
    SharedDataAccessCountryModule,
    MatSelectModule,
    TranslateModule,
    SharedModule
  ],
  providers: [
    LoginGuard
  ]
})
export class AuthModule { }
