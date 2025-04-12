import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trainer } from '../../models/trainer.interface';

@Component({
  selector: 'app-trainer-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.css']
})
export class TrainerCardComponent {
  @Input() trainer!: Trainer;
} 