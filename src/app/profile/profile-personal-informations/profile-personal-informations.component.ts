import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetailsFacade } from '../../shared/data-access/store/user/facade/user-details.facade';
import { distinctUntilChanged, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PersonalDetails } from '../../shared/data-access/models/auth/LogIn';
import { UserDetails } from '../../shared/data-access/models/user/UserDetails';

export interface PersonalDetailsForm {
  id: FormControl,
  firstName: FormControl,
  lastName: FormControl,
  email: FormControl,
  phone: FormControl,
  coverImageUrl: FormControl,
  profileImageUrl: FormControl
}

@Component({
  selector: 'profile-personal-informations',
  templateUrl: './profile-personal-informations.component.html',
  styleUrl: './profile-personal-informations.component.scss'
})
export class ProfilePersonalInformationsComponent {
  personalDetailsForm!: FormGroup<PersonalDetailsForm>;

  personalDetails$: Observable<Partial<UserDetails>>;

  get formControl() {
    return this.personalDetailsForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private userDetailsFacade: UserDetailsFacade,
    private cdr: ChangeDetectorRef
  ) {
    this.personalDetailsForm = this.fb.group({
      id: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      coverImageUrl: [''],
      profileImageUrl: ['']
    });

    this.personalDetails$ = this.userDetailsFacade.selectPersonalDetails$;

    this.personalDetails$.pipe(distinctUntilChanged(), takeUntilDestroyed()).subscribe(data => {
      this.personalDetailsForm.patchValue({ ...data });
    });
  
  }

  imageUploadUrl(assetUrl: {coverImageUrl: string, profileImageUrl: string}) {
    this.formControl.coverImageUrl.setValue(assetUrl.coverImageUrl);
    this.formControl.profileImageUrl.setValue(assetUrl.profileImageUrl);
  }

  savePersonalInformations() {
    this.userDetailsFacade.updatePersonalDetails({...this.personalDetailsForm.value} as PersonalDetails);
  }

}
