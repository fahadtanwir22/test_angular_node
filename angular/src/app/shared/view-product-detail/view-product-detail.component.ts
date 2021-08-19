import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-view-product-detail',
  templateUrl: './view-product-detail.component.html',
  styleUrls: ['./view-product-detail.component.scss']
})
export class ViewProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { product: Product }
  ) {
    this.product = data.product;
   }

  ngOnInit(): void {
  }

}
