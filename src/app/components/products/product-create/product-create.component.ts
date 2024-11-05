import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalSucessComponent } from '../../modal-sucess/modal-sucess.component';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  products: Product = {
    name: '',
    price: null,
  };

  constructor(
    private productService: ProductService,
    private route: Router,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.products).subscribe(() => {
      this._dialog.open(ModalSucessComponent);
      this.route.navigate(['/products']);
    });
  }

  cancel(): void {
    this.route.navigate(['/products']);
  }
}
