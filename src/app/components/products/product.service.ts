import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, map, Observable } from 'rxjs';
import { Product } from './product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/products';

  private productSource = new BehaviorSubject<Product | null>(null);
  currentProduct = this.productSource.asObservable();

  constructor(private _http: HttpClient, private snackBar: MatSnackBar) {}

  create(product: Product): Observable<Product> {
    return this._http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  handleError(e: any): Observable<any> {
    this.showToast('Ocorreu um erro, tente novamente!', true);
    return EMPTY;
  }

  read(): Observable<Product[]> {
    return this._http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  readById(id: string): Observable<Product> {
    return this._http.get<Product>(`${this.baseUrl}/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this._http
      .put<Product>(`${this.baseUrl}/${product.id}`, product)
      .pipe(
        map((obj) => obj),
        catchError((e) => this.handleError(e))
      );
  }

  delete(id: any): Observable<Product> {
    return this._http.delete<Product>(`${this.baseUrl}/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  setProduct(product: Product): void {
    this.productSource.next(product);
  }

  showToast(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : '',
    });
  }
}
