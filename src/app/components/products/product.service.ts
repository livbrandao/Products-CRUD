import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/products';

  constructor(private _http: HttpClient) {}

  create(product: Product): Observable<Product> {
    return this._http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this._http.get<Product[]>(this.baseUrl);
  }

  getCompanyById(id: string): Observable<Product> {
    return this._http.get<Product>(`${this.baseUrl}/${id}`);
  }

  updateCompany(company: Product): Observable<Product> {
    return this._http.put<Product>(`${this.baseUrl}/${company.id}`, company);
  }

  getProductsData(): Observable<Product[]> {
    return this._http.get<Product[]>(this.baseUrl);
  }
}
