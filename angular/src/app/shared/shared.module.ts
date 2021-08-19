import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { ViewProductDetailComponent } from './view-product-detail/view-product-detail.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    TopNavigationComponent,
    ViewProductDetailComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    TopNavigationComponent,
    LoaderComponent,
    AppRoutingModule
  ]
})
export class SharedModule { }
