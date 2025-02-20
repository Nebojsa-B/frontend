import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserDetailsFacade } from '../../shared/data-access/store/user/facade/user-details.facade';
import { ProductDetails, UserDetails } from '../../shared/data-access/models/user/UserDetails';
import { Profile } from '../../shared/data-access/models/auth/LogIn';

export interface ProductDetailsFormGroup {
  type: FormControl;
  name: FormControl;
  quantity: FormControl;
  price: FormControl;
  description: FormControl;
  startDate: FormControl;
  endDate: FormControl;
  productImages: FormArray;
}

@Component({
  selector: 'profile-products',
  templateUrl: './profile-products.component.html',
  styleUrl: './profile-products.component.scss'
})
export class ProfileProductsComponent {
  @Input() productCurrency!: string | undefined;

  productDetailsForm!: FormGroup<ProductDetailsFormGroup>;
  isPreview = true;


  products$!: Observable<ProductDetails[] | undefined>;
  currentUser$!: Observable<Partial<UserDetails> | null>;

  get formControl() {
    return this.productDetailsForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private userDetailsFacade: UserDetailsFacade
  ) {
    this.productDetailsForm = this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      productImages: this.fb.array([])
    });

    this.currentUser$ = this.userDetailsFacade.selectData$;
    this.products$ = this.userDetailsFacade.selectUserDetailsProducts$;

  }

  uploadProductImage(file: File) {
    // this.fileUploadFacade.uploadProductImage(file);
  }


  addProduct(){
    this.isPreview = false;
  }

  saveProduct(farmerId: number | undefined){
    if(farmerId === undefined) return;

    this.productDetailsForm.markAllAsTouched();

    if(!this.productDetailsForm.valid) return;

    this.userDetailsFacade.addProductToFarmer(farmerId, {...this.productDetailsForm.value} as ProductDetails);

    this.productDetailsForm.reset();
    
    this.isPreview = true;
  }
}
