import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FarmerProduct } from '../../../../shared/data-access/models/product/Product';

@Component({
  selector: 'farmer-products-accordion',
  templateUrl: './farmer-products-accordion.component.html',
  styleUrl: './farmer-products-accordion.component.scss'
})
export class FarmerProductsAccordionComponent implements OnChanges {
 @Input() products: FarmerProduct[] | null = null;
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
}
