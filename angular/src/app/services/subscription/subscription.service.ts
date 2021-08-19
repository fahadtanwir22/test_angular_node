import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseGet, ApiResponsePost } from 'src/app/models/ApiResponse';
import { Product } from 'src/app/models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  // apiURL: string = 'https://product-subscription.herokuapp.com/api/products';
  apiURL: string = environment.server_url;

  constructor(
    private http: HttpClient
  ) { }

  loadApiData() {
    return this.http.get<ApiResponseGet>(`${this.apiURL}/all`);
  }

  subscribeProduct(item: Product) {
    return this.http.post<ApiResponsePost>(`${this.apiURL}/subscribe`, { product: item });
  }
}
