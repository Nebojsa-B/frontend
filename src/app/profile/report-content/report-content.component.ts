import { Component, Input } from '@angular/core';
import { Order } from '../../shared/data-access/models/order/Order';

@Component({
  selector: 'report-content',
  templateUrl: './report-content.component.html',
  styleUrl: './report-content.component.scss'
})
export class ReportContentComponent {
  @Input() orders!: Order[] | null;


  get totalPrice() {
    let sum = 0;
    const totalResults = this.orders?.map(order => order.totalPrice);
    
    if(!totalResults) return;

    for (let num of totalResults) {
      sum += num;
    }

    return sum;
  }
}
