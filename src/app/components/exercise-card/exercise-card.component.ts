import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbExercise } from '../../models/dbExercise.interface';
import { CarrierIconComponent } from "../icons/carrier-icon.component";
import { TrashcanIconComponent } from "../icons/trashcan-icon.component";
import { PlusCircleIconComponent } from '../icons/plus-circle-icon.component';
import { MinusCircleIconComponent } from '../icons/minus-circle-icon.component';
import { defaultProperties } from '../../pages/template/edit/template-edit.component';
import { TemplateExercise } from '../../models/template.interface';
 
@Component({
  selector: 'app-exercise-card',
  standalone: true,
  imports: [CommonModule, CarrierIconComponent, TrashcanIconComponent, PlusCircleIconComponent, MinusCircleIconComponent],
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css']
})
export class ExerciseCardComponent {
  @Input() exercise!: DbExercise;
  @Input() templateExercise!: TemplateExercise;
  @Input() selected: boolean = false;
  @Input() defaultProperties = defaultProperties;

  @Output() selectedChange = new EventEmitter<{ exercise: DbExercise, selected: boolean }>();

  onSelectedChange(selected: boolean) {
    this.selectedChange.emit({ exercise: this.exercise, selected });
  }

  addSerie() {
    this.templateExercise.sets.push({
      reps: defaultProperties.reps,
      weight: defaultProperties.weight,
      time: defaultProperties.time
    });
    console.log(this.templateExercise);
  }

  removeSerie(i: number) {
    this.templateExercise.sets.splice(i, 1);
    console.log(this.templateExercise);
  }
} 