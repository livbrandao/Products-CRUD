import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

export class ProductReadTableDataSource extends DataSource<Product> {
  private dataSubject = new BehaviorSubject<Product[]>([]);
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private productService: ProductService) {
    super();
    this.loadData();
  }

  // Getter para o comprimento dos dados
  get dataLength(): number {
    return this.dataSubject.value.length;
  }

  private loadData(): void {
    this.productService.read().subscribe((data) => this.dataSubject.next(data));
  }

  connect(): Observable<Product[]> {
    if (this.paginator && this.sort) {
      return merge(
        this.dataSubject.asObservable(),
        this.paginator.page,
        this.sort.sortChange
      ).pipe(
        map(() => {
          const sortedData = this.getSortedData([...this.dataSubject.value]);
          return this.getPagedData(sortedData);
        })
      );
    } else {
      throw Error(
        'Please set the paginator and sort on the data source before connecting.'
      );
    }
  }

  disconnect(): void {
    this.dataSubject.complete();
  }

  private getPagedData(data: Product[]): Product[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.slice(startIndex, startIndex + this.paginator.pageSize);
    } else {
      return data;
    }
  }

  private getSortedData(data: Product[]): Product[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(a.id ?? 0, b.id ?? 0, isAsc);
        default:
          return 0;
      }
    });
  }
}

// Função compare para realizar a ordenação
function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
