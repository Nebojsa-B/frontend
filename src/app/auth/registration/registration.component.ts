import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CountryDropdownFacade } from '../../shared/data-access/store/country/facade/country-dropdown.facade';
import { Observable } from 'rxjs';
import { CountryDropdown, CountryDropdownDataWithLoading } from '../../shared/data-access/models/country/CountryDropdown';
import { AuthFacade } from '../../shared/data-access/store/auth/facade/auth.facade';
import { RegistrationForm } from '../../shared/data-access/models/auth/LogIn';
import { Router } from '@angular/router';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const repeatPassword = control.get('repeatPassword')?.value;

    if (password && repeatPassword && password !== repeatPassword) {
      return { passwordsMismatch: true };
    }
    return null;
  };
}

interface RegistrationFormGroup{
  firstName: FormControl;
  lastName: FormControl;
  countryId: FormControl;
  email: FormControl;
  password: FormControl;
  repeatPassword: FormControl;
}

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registrationForm!: FormGroup<RegistrationFormGroup>;
  showPassword = false;
  selectedCountry!: CountryDropdown;

  countryDataWithLoading$!: Observable<CountryDropdownDataWithLoading>;

  get formControl() {
    return this.registrationForm.controls;
  }

  constructor(private fb: FormBuilder,
    private countryDropdownFacade: CountryDropdownFacade,
    private authFacade: AuthFacade,
    private router: Router
  ){

    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      countryId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, 
    { validators: passwordsMatchValidator() });

    this.countryDataWithLoading$ = this.countryDropdownFacade.selectDataWithLoading$;
  }

  ngOnInit() {
    this.authFacade
      .registrationSuccessAction()
      .subscribe((data) => {
        console.log('RegistrationData: ', data)
        this.router.navigateByUrl('dashboard');
      });

  }


  signUp() {
    this.registrationForm.markAllAsTouched();
    
    if(this.registrationForm.valid) {
      this.authFacade.signUp(this.registrationForm.value as RegistrationForm)
    }
  }

  chosenCountry(country: CountryDropdown){
    this.selectedCountry = country;
  }


}
