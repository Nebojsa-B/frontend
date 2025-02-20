import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface FarmFormGroup {
  farmName: FormControl,
  farmNumber: FormControl,
  motto: FormControl,
  description: FormControl
}

@Component({
  selector: 'farmer-farm-details-form',
  templateUrl: './farmer-farm-details-form.component.html',
  styleUrl: './farmer-farm-details-form.component.scss'
})
export class FarmerFarmDetailsFormComponent {
  @Input() farmerForm!:FormGroup;

  farmDetailsForm!: FormGroup<FarmFormGroup>;

  get formControl() {
    return this.farmDetailsForm.controls;
  }

  constructor(private fb: FormBuilder) {
    this.farmDetailsForm = this.fb.group({
      farmName: ['', Validators.required],
      farmNumber: ['', Validators.required],
      motto: '',
      description: '',
    });
  }

  ngOnInit() {
    this.farmerForm.setControl('farm', this.farmDetailsForm)
  }
}
