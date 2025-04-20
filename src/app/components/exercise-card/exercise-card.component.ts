import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbExercise } from '../../models/dbExercise.interface';
import { CarrierIconComponent } from "../icons/carrier-icon.component";
import { TrashcanIconComponent } from "../icons/trashcan-icon.component";

@Component({
  selector: 'app-exercise-card',
  standalone: true,
  imports: [CommonModule, CarrierIconComponent, TrashcanIconComponent],
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css']
})
export class ExerciseCardComponent {
  @Input() exercise!: DbExercise;
  @Input() selected: boolean = false;
  @Input() properties: { sets: number, reps: number, weight: number, time: number } = { sets: 0, reps: 0, weight: 0, time: 0 };

  @Output() selectedChange = new EventEmitter<{ exercise: DbExercise, selected: boolean }>();

  onSelectedChange(selected: boolean) {
    this.selectedChange.emit({ exercise: this.exercise, selected });
  }
} 