import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FarmerProduct } from '../../../shared/data-access/models/product/Product';
import { ProductDetails } from '../../../shared/data-access/models/user/UserDetails';

@Component({
  selector: 'profile-products-accordion',
  templateUrl: './profile-products-accordion.component.html',
  styleUrl: './profile-products-accordion.component.scss'
})
export class ProfileProductsAccordionComponent {
  @Input() products: ProductDetails[] | null | undefined = null;
  @Output() removeProductIndex = new EventEmitter<number>();
 
 
  selectedImages: string[] = [];
 
  ngOnChanges(changes: SimpleChanges) {
   if (changes['products'] && this.products) {
     this.selectedImages = [];
     this.products.forEach((product, index) => {
       if (product.productImages && product.productImages.length > 0) {
         this.selectedImages[index] = product.productImages[0];
       }
     });
   }
 }
 
  selectImage(index: number, productImage: string){
   this.selectedImages[index] = productImage;
  }
 
  removeProduct(index: number){
   this.removeProductIndex.emit(index);
  }

  editProduct(index: number) {
    // this.editProductIndex.emit(index);
  }
}
