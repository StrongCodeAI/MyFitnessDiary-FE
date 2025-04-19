import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CheckIconComponent } from '../icons/check-icon.component';

interface PriceFeature {
  description: string;
}

@Component({
  selector: 'app-price-card',
  standalone: true,
  imports: [CommonModule, CheckIconComponent],
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent {
  @Input() planName: string = '';
  @Input() price: number | null = null;
  @Input() features: PriceFeature[] = [];
  @Input() paymentLink: string | null = null;

  showTrainerModal: boolean = false;
  showConfirmationTrainerInfo: boolean = false;

  constructor(private router: Router) {}

  onCardClick() {
    if (this.planName === 'Entrenador') {
      this.showTrainerModal = true;
      this.showConfirmationTrainerInfo = false;
    }
  }

  closeTrainerModal() {
    this.showTrainerModal = false;
    this.showConfirmationTrainerInfo = false;
  }

  confirmTrainerRequest() {
    // Aquí se puede agregar la lógica para enviar la solicitud
    this.showConfirmationTrainerInfo = true;
  }

  finalizeConfirmationTrainerInfo() {
    this.showConfirmationTrainerInfo = false;
    this.router.navigate(['/settings']);
  }

} 