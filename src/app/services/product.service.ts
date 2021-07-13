import { CategoryModel } from './../models/category-model';
import { ProductModel } from './../models/product-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = environment.backendUrl;

  constructor(private httpClient: HttpClient) {}

  getDiversProducts(): Observable<any> {
    return this.httpClient.get<any>(
      `${this.url}/products/all`
    );
  }

  getAllProducts(pageNumber: number = 1): Observable<any> {
    return this.httpClient.get<any>(
      `${this.url}/products/all?page=${pageNumber}`
    );
  }

  getProductById(id: number): Observable<any> {
    return this.httpClient.get<ProductModel>(`${this.url}/products/one/${id}`);
  }

  searchProductsByKeyWord(keyword: string): Observable<ProductModel[]> {
    return this.httpClient.get<any[]>(
      `${this.url}/products/search/${keyword}`
    , {
      headers: {
        "Accept" : "Application/json"
      }
    });
  }
  getAllCategories() {
    return this.httpClient.get<any[]>(`${this.url}/category/all`);
  }

  getCategoryById(): Observable<any> {
    return this.httpClient.get<CategoryModel>(`${this.url}/Categories`);
  }
}
