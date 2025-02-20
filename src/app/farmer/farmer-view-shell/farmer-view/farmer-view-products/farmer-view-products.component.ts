import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductMap } from '../../../../shared/data-access/models/farmer/Farmer';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export interface FarmerViewProductGroup {
  quantity: FormControl
}

@Component({
  selector: 'farmer-view-products',
  templateUrl: './farmer-view-products.component.html',
  styleUrl: './farmer-view-products.component.scss'
})
export class FarmerViewProductsComponent {
  @Input() products!: ProductMap[];
  @Input() loading!: boolean | null;

  @Output() emitProductForCart = new EventEmitter<{productId: number, quantity: number}>();
  @Output() emitProductForBuy = new EventEmitter<{productId: number, quantity: number}>();

  form!: FormGroup<FarmerViewProductGroup>;
  
  get formControl() {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      quantity: 0
    })
  }

  addToCart(product: ProductMap) {
    this.emitProductForCart.emit({
      productId: product.id,
      quantity: this.formControl.quantity.value
    });
  }

  buyNow(product: ProductMap){
    this.emitProductForBuy.emit({
      productId: product.id,
      quantity: this.formControl.quantity.value
    });
  }

}
