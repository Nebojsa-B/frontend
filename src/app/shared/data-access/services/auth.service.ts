import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm, LoginResponse, RegistrationForm } from '../models/auth/LogIn';
import { environment } from '../../../../../environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(loginForm: LoginForm) {
    return this.http.post<LoginResponse>(`${environment.url}auth/sign-in`, {...loginForm})
  }

  signUp(registrationForm: RegistrationForm) {
    return this.http.post<LoginResponse>(`${environment.url}auth/sign-up`, {...registrationForm})
  }

  signOut() {
    return this.http.get(`${environment.url}auth/sign-out`)
  }

  isLoggedIn() {
    return this.http.get<LoginResponse>(`${environment.url}auth/refresh-token`).pipe(
      map(data => {
        return data
      })
    )
  }

}
