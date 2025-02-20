import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadFacade } from '../../../shared/data-access/store/file-upload/facade/file-upload.facade';
import { distinctUntilChanged } from 'rxjs';
import { FarmerProduct } from '../../../shared/data-access/models/product/Product';

interface FarmerProductFormGroup {
  products:FormArray;
}

interface FarmerNewProductFormGroup {
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
  selector: 'farmer-products-form',
  templateUrl: './farmer-products-form.component.html',
  styleUrl: './farmer-products-form.component.scss'
})
export class FarmerProductsFormComponent implements OnInit {
  @Input() productCurrency!: string | undefined;

  @Input() farmerForm!: FormGroup;
  
  @Output() addedProduct = new EventEmitter<FarmerProduct[]>();
  farmerProductForm!: FormGroup<FarmerProductFormGroup>;

  get products() {
    return this.farmerProductForm.get('products') as FormArray;
  }

  get lastProductFormGroup(): FormGroup {
    return this.products.at(this.products.length - 1) as FormGroup<FarmerNewProductFormGroup>;
  }

  formControl(controlName: keyof FarmerNewProductFormGroup) {
    return this.lastProductFormGroup.get(controlName) as FormControl;
  }


  constructor(private fb: FormBuilder, private fileUploadFacade: FileUploadFacade) {
    this.farmerProductForm = this.fb.group({
      products: this.fb.array([])
    });

    this.createProduct();

    this.fileUploadFacade.selectProductImageFileUpload$.pipe(distinctUntilChanged()).subscribe(productImageUrl => {
      if(!productImageUrl) return;

      const productImagesFormArray = this.lastProductFormGroup.get('productImages') as FormArray;

      productImagesFormArray.push(this.fb.control(productImageUrl.fileUrl));
    })
  }

  ngOnInit(){
    this.farmerForm.setControl('products', this.products);
  }

  createProduct() {
    this.products.push(this.newProduct());
  }

  newProduct() {
    return this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      productImages: this.fb.array([])
    }); 
  }

  addProduct() {
    this.lastProductFormGroup.markAllAsTouched();

    if(!this.lastProductFormGroup.valid) return;

    this.createProduct();

    console.log(this.farmerProductForm.value);
  }

  removeProduct(index:number) {
    this.products.removeAt(index);
  }

  uploadProductImage(file: File) {
    this.fileUploadFacade.uploadProductImage(file);
  }

  removeProductImage(index: number){
    (this.lastProductFormGroup.controls['productImages'] as FormArray).removeAt(index);
  }
}
