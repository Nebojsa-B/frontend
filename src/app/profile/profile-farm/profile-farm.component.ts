import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetailsFacade } from '../../shared/data-access/store/user/facade/user-details.facade';
import { Observable } from 'rxjs';
import { FarmDetails } from '../../shared/data-access/models/user/UserDetails';

interface FarmFormGroup {
  id: FormControl,
  farmName: FormControl,
  farmNumber: FormControl,
  motto: FormControl,
  description: FormControl
}

@Component({
  selector: 'profile-farm',
  templateUrl: './profile-farm.component.html',
  styleUrl: './profile-farm.component.scss'
})
export class ProfileFarmComponent {
  farmDetailsForm!: FormGroup<FarmFormGroup>;

  farmDetails$: Observable<FarmDetails | undefined>;

  get formControl() {
    return this.farmDetailsForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private userDetailsFacade: UserDetailsFacade
  ) {
    this.farmDetails$ = this.userDetailsFacade.selectUserDetailsFarm$;

    this.farmDetailsForm = this.fb.group({
      id: [null],
      farmName: ['', Validators.required],
      farmNumber: ['', Validators.required],
      motto: '',
      description: '',
    });

    this.farmDetails$.subscribe(data => {
      this.farmDetailsForm.patchValue({...data});
    });
  }

  saveFarm() {
    this.userDetailsFacade.updateFarm({...this.farmDetailsForm.value} as FarmDetails);
  }
}
