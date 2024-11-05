import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() name: string = '';
  @Input() price: number = 0;

  @Output() viewDetails = new EventEmitter<{
    name: string;
    price: number;
  }>();

  showDetails(): void {
    this.viewDetails.emit({
      name: this.name,
      price: this.price,
    });
  }
}
