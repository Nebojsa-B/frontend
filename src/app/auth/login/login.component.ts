import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '../../shared/data-access/store/auth/facade/auth.facade';
import { LoginForm } from '../../shared/data-access/models/auth/LogIn';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface LoginFormGroup {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup<LoginFormGroup>

  showPassword = false;

 get formControl(){
  return this.loginForm.controls;
 }

 constructor(
    private authFacade: AuthFacade, 
    private router: Router, 
    private fb:FormBuilder,
    private snackBar: MatSnackBar,
  ){
  this.loginForm = this.fb.group({
    email: [ '', Validators.required ],
    password: [ '', Validators.required ]
  })
 }

 ngOnInit() {
  this.authFacade
      .loginSuccessAction()
      .subscribe((data) => {
        this.router.navigateByUrl('dashboard');
      });

  this.authFacade
      .loginFailAction()
      .subscribe(({error}) => {
        if(Array.isArray(error)) {
          for(let err of error) {
            this.showSnackBar(err);
          }
        } else {
          this.showSnackBar(error);
        }
      });

 }

 showSnackBar(message: string) {
  this.snackBar.open(message, 'Close', { duration: 3000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: 'error-snackbar' });
 }

 onSubmit() {
  this.loginForm.markAllAsTouched();

  if(!this.loginForm.valid) return;

  this.authFacade.login(this.loginForm.value as LoginForm);
 }

 redirectTo(url: string) {
  this.router.navigateByUrl(url);
 }

}


