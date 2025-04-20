import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../../../models/exercise.interface';
import { CarrierIconComponent } from "../../icons/carrier-icon.component";

@Component({
  selector: 'app-exercise-card',
  standalone: true,
  imports: [CommonModule, CarrierIconComponent],
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css']
})
export class ExerciseCardComponent {
  @Input() exercise!: Exercise;
} 