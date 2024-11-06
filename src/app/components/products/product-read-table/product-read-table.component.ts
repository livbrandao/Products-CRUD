import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadTableDataSource } from './product-read-table-datasource';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ModalDeleteComponent } from '../../modal-delete/modal-delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-read-table',
  templateUrl: './product-read-table.component.html',
  styleUrls: ['./product-read-table.component.css'],
})
export class ProductReadTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource: ProductReadTableDataSource;

  displayedColumns = ['id', 'name', 'price', 'action'];
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private _dialog: MatDialog
  ) {
    // Passe o ProductService para o dataSource
    this.dataSource = new ProductReadTableDataSource(this.productService);
  }

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  delete(product: Product): void {
    this.productService.setProduct(product);
    this._dialog.open(ModalDeleteComponent);
  }
}
