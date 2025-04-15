import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PriceFeature {
  description: string;
}

@Component({
  selector: 'app-price-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent {
  @Input() planName: string = '';
  @Input() price: number | null = null;
  @Input() features: PriceFeature[] = [];
} 