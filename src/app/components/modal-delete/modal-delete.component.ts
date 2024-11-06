import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from '../products/product.service';
import { Product } from '../products/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css'],
})
export class ModalDeleteComponent implements OnInit {
  products: Product | null = null;

  constructor(
    private dialogRef: MatDialogRef<ModalDeleteComponent>,
    private productService: ProductService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productService.currentProduct.subscribe((product) => {
      if (product) {
        this.products = product;
      } else {
        console.error('Nenhum produto encontrado');
      }
    });
  }

  closeAndRedirect() {
    this.dialogRef.close();
    this.route.navigate(['/products']);
  }

  deleteProduct(): void {
    if (this.products) {
      this.productService.delete(this.products.id).subscribe(() => {
        this.dialogRef.close();
        this.showToast('Produto excluído com sucesso!');
        this.dialogRef.afterClosed().subscribe(() => {
          this.route
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.route.navigate(['/products']);
            });
        });
      });
    } else {
      console.error('Nenhum produto encontrado para excluir');
    }
    this.closeAndRedirect();
  }

  cancel(): void {
    this.dialogRef.close();
    this.route.navigate(['/products']);
  }

  showToast(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['msg-sucess'],
    });
  }
}
