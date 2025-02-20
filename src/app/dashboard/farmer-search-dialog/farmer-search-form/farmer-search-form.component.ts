import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SearchQueryParams } from '../../../shared/data-access/models/farmer/Search';
import { FarmerSearchDialogComponent } from '../farmer-search-dialog.component';
import { FarmerListFacade } from '../../../shared/data-access/store/farmer/facade/farmer-list.facade';

export interface FarmerSearchFormGroup {
  firstName: FormControl;
  lastName: FormControl;
  farmName: FormControl;
  city: FormControl;
  productType: FormControl;
  productName: FormControl;
}

@Component({
  selector: 'farmer-search-form',
  templateUrl: './farmer-search-form.component.html',
  styleUrl: './farmer-search-form.component.scss'
})
export class FarmerSearchFormComponent {
  @Input() set searchQueryParams(value: SearchQueryParams ){
    if(!value) return;

    this.farmerSearchForm.patchValue({...value});
  }

  farmerSearchForm: FormGroup<FarmerSearchFormGroup>;

  get formControl() {
    return this.farmerSearchForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private farmerListFacade: FarmerListFacade,
    private matDialogRef: MatDialogRef<FarmerSearchDialogComponent>
  ) {
    this.farmerSearchForm = this.fb.group({
      firstName: '',
      lastName: '',
      farmName: '',
      city: '',
      productType: '',
      productName: ''
    });
  }

  clearAll() {
    this.router.navigate([], {
      queryParams: {}
    });

    this.farmerListFacade.getFarmers();

    this.farmerSearchForm.reset();
    this.matDialogRef.close();
  }

  applySearch() {
    const queryParams = Object.fromEntries(
      Object.entries(this.farmerSearchForm.value).filter(([_, value]) => value !== '')
    );

    this.router.navigate(['dashboard'], {
      queryParams
    });

    this.farmerListFacade.getFarmers({...this.farmerSearchForm.value});

    this.matDialogRef.close();
  }
}
