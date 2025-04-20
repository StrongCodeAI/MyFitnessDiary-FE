import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../../models/exercise.interface';
import { CarrierIconComponent } from "../icons/carrier-icon.component";

@Component({
  selector: 'app-exercise-card',
  standalone: true,
  imports: [CommonModule, CarrierIconComponent],
  template: `
    <div class="exercise-card">
      <div class="exercise-icon">
        <img [src]="exercise.image" alt="exercise icon">
      </div>
      <div class="exercise-info">
        <h3>{{ exercise.name }}</h3>
        <p>{{ exercise.tags.join(', ') }}</p>
      </div>
      <app-carrier-icon></app-carrier-icon>
    </div>
  `,
  styleUrls: ['./exercise-card.component.css']
})
export class ExerciseCardComponent {
  @Input() exercise!: Exercise;
} 