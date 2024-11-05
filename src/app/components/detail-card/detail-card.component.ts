import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],
})
export class DetailCardComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() price: number = 0;
}
