import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry, timeout } from 'rxjs/operators';
import { Product } from 'src/app/models/Product';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { SubscriptionService } from 'src/app/services/subscription/subscription.service';
import { ViewProductDetailComponent } from 'src/app/shared/view-product-detail/view-product-detail.component';

@Component({
  selector: 'app-subscription-main',
  templateUrl: './subscription-main.component.html',
  styleUrls: ['./subscription-main.component.scss']
})
export class SubscriptionMainComponent implements OnInit {

  ProductsSubject: BehaviorSubject<Product[]>;
  Products$: Observable<Product[]>;
  TimeOutValue: number;


  constructor(
    private subscriptionService: SubscriptionService,
    private dialog: MatDialog,
    private loaderService: LoaderService
  ) {

    this.ProductsSubject = new BehaviorSubject([]);
    this.Products$ = this.ProductsSubject.asObservable();
    loaderService.setLoaderStatus(true);
    this.loadApiData().then(() => loaderService.setLoaderStatus(false));
  }

  ngOnInit(): void {
  }

  viewProductDetail(item: Product) {
    let dialogRef = this.dialog.open(ViewProductDetailComponent, {
      data: { product: item },
    });
  }

  async loadApiData() {
    const result = await this.subscriptionService.loadApiData().pipe(retry(2)).toPromise();
    this.ProductsSubject.next(result.products);
  }

  async subscribeProduct(item: Product) {
    this.loaderService.setLoaderStatus(true);
    const result = await this.subscriptionService.subscribeProduct(item).toPromise();
    if(result.product) {
      let currentArr = this.ProductsSubject.value;
      const index = currentArr.findIndex(prod  => prod.id == result.product.id)
      if(index != -1) currentArr[index] = result.product;
      this.ProductsSubject.next(currentArr);
    }
    this.loaderService.setLoaderStatus(false);
  }

}
