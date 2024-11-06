import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalSucessComponent } from '../../modal-sucess/modal-sucess.component';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  products: Product = { name: '', price: 0 };

  constructor(
    private productService: ProductService,
    private route: Router,
    private router: ActivatedRoute,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');

    if (id) {
      this.productService.readById(id).subscribe((products) => {
        this.products = products;
      });
    }
  }

  updateProduct(): void {
    this.productService.updateProduct(this.products).subscribe(() => {
      this._dialog.open(ModalSucessComponent);
      this.route.navigate(['/products']);
    });
  }

  cancel(): void {
    this.route.navigate(['/products']);
  }
}
