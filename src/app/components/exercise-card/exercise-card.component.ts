import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../../models/exercise.interface';
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
  @Input() exercise!: Exercise;
  @Input() selected: boolean = false;

  @Output() selectedChange = new EventEmitter<{ exercise: Exercise, selected: boolean }>();

  onSelectedChange(selected: boolean) {
    this.selectedChange.emit({ exercise: this.exercise, selected });
  }
} 