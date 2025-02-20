import { Component, ComponentFactoryResolver, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, OrderProduct, OrderStatus } from '../../shared/data-access/models/order/Order';
import { OrderListFacade } from '../../shared/data-access/store/order/facade/order-list.facade';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ReportContentComponent } from '../report-content/report-content.component';

@Component({
  selector: 'profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrl: './profile-orders.component.scss'
})
export class ProfileOrdersComponent {
  @ViewChild('reportContent') reportContent!: TemplateRef<any>;

  orders$: Observable<Order[] | null>;
  loading$: Observable<boolean>;

  constructor(
    private orderListFacade: OrderListFacade,
    private router: Router,
    private viewContainerRef: ViewContainerRef
  ){

    this.orderListFacade.getOrders(OrderStatus.COMPLETED);
    
    this.orders$ = this.orderListFacade.selectData$;
    this.loading$ = this.orderListFacade.selectLoading$;
  }

  reviewCustomer(orderProduct: OrderProduct) {
    this.router.navigateByUrl(`farmer/view/${orderProduct.product.farmer.id}`);
  }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

  exportBill(orders: Order[] | null) {
    if (!this.reportContent) return;

    // Create an embedded view but do NOT attach it to the DOM
    const viewRef = this.reportContent.createEmbeddedView(null);
    viewRef.detectChanges(); // Ensure it's rendered

    // Get the raw HTML element from the generated view
    const element = viewRef.rootNodes[0] as HTMLElement;
    
    if (element) {
      console.log(element); // Logs the template's HTML
    }

    const doc = new jsPDF();
  
    doc.html(element, {
      callback: function (doc) {
        doc.save('Zavrsni Rad - Exported Bill' + '.pdf');
      },
      width: 1000,
      x: 5,
      y: 5,
      autoPaging:true,
      
   });

  // Destroy the view to prevent memory leaks
  viewRef.destroy()

  }
}
