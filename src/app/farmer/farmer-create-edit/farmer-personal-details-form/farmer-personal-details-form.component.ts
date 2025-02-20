import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../../../shared/data-access/models/auth/LogIn';

export interface PersonalDetailsForm {
  firstName: FormControl,
  lastName: FormControl,
  email: FormControl,
  phone: FormControl
}

@Component({
  selector: 'farmer-personal-details-form',
  templateUrl: './farmer-personal-details-form.component.html',
  styleUrl: './farmer-personal-details-form.component.scss'
})
export class FarmerPersonalDetailsFormComponent {
  @Input() farmerForm!: FormGroup;
  @Input() set profileDetails (value: Profile | null) {
    if(!value) return;

    this.personalDetailsForm.patchValue({...value, phone: '0651234567'});
  };

  personalDetailsForm!: FormGroup<PersonalDetailsForm>;

  get formControl() {
    return this.personalDetailsForm.controls
  }

  constructor(private fb: FormBuilder) {
    this.personalDetailsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.farmerForm.setControl('user', this.personalDetailsForm)
  }
}
