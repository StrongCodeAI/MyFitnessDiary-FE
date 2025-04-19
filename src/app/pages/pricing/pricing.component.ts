import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceCardComponent } from '../../components/price-card/price-card.component';
import { NavMenuService } from '../../services/nav-menu.service';
import { HeaderService } from '../../services/header.service';

interface PricePlan {
  name: string;
  price: number | null;
  features: { description: string }[];
  paymentLink: string | null;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, PriceCardComponent],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  selectedPlan: 'monthly' | 'annual' = 'monthly';
  
  pricePlans: PricePlan[] = [
    {
      name: 'Gratis',
      price: null,
      features: [
        { description: 'Registra tus entrenamientos' },
        { description: 'Crea tus propias plantillas' },
        { description: 'Observa tus estadísticas' },
        { description: 'Contacta con entrenadores' }
      ],
      paymentLink: null
    },
    {
      name: 'Premium',
      price: 4.99,
      features: [
        { description: 'Obtén estadísticas premium' },
        { description: 'Mejores consejos de la IA' }
      ],
      paymentLink: 'https://buy.stripe.com/test_cN25mY5Zj0cxbgQeUU'
    },
    {
      name: 'Entrenador',
      price: 9.99,
      features: [
        { description: 'Muéstrate en nuestra lista de entrenadores' },
        { description: 'Comparte tus plantillas con tus clientes' }
      ],
      paymentLink: null
    }
  ];

  constructor(private headerService: HeaderService) {
    this.headerService.setDefaultHeader();
  }

  changePlan(plan: 'monthly' | 'annual'): void {
    this.selectedPlan = plan;
  }
} 