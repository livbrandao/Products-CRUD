import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/products';

  private productSource = new BehaviorSubject<Product | null>(null);
  currentProduct = this.productSource.asObservable();

  constructor(private _http: HttpClient) {}

  create(product: Product): Observable<Product> {
    return this._http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this._http.get<Product[]>(this.baseUrl);
  }

  readById(id: string): Observable<Product> {
    return this._http.get<Product>(`${this.baseUrl}/${id}`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this._http.put<Product>(`${this.baseUrl}/${product.id}`, product);
  }

  delete(id: any): Observable<Product> {
    return this._http.delete<Product>(`${this.baseUrl}/${id}`);
  }

  setProduct(product: Product): void {
    this.productSource.next(product);
  }
}
