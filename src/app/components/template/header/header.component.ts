import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  exibirBotao: boolean = false;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      this.exibirBotao =
        !this.route.url.includes('/products/create') &&
        this.route.url.includes('/products');
    });
  }

  navigateToProductsCreate(): void {
    this.route.navigate(['/products/create']);
  }
}
