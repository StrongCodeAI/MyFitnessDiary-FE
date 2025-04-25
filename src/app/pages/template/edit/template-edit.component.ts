import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { NavMenuService } from '../../../services/nav-menu.service';
import { Template, TemplateExercise } from '../../../models/template.interface';
import { DbExercise } from '../../../models/dbExercise.interface';
import { v4 as uuidv4 } from 'uuid';
import { DataManagementService } from '../../../services/data-management.service';
import { LoadingSpinnerComponent } from '../../../components/loading-spinner/loading-spinner.component';
import { ExerciseCardComponent } from '../../../components/exercise-card/exercise-card.component';
import { of, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { SaveIconComponent } from '../../../components/icons/save-icon.component';

export const defaultProperties = {
  'sets': 1,
  'reps': 10,
  'weight': 0,
  'time': 5
};

@Component({
  selector: 'app-template-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingSpinnerComponent, ExerciseCardComponent, SaveIconComponent],
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.css']
})
export class TemplateEditComponent implements OnInit {
  private searchSubject = new Subject<string>();

  availableExercises: DbExercise[] = [];
  filteredExercises: DbExercise[] = [];
  selectedExercises: TemplateExercise[] = [];

  template: Template = {
    id: uuidv4(),
    name: 'Nueva Plantilla',
    defaultProperties: defaultProperties,
    exercises: this.selectedExercises
  };
  isEditMode: boolean = false;
  isLoading: boolean = true;
 
  constructor(
    private headerService: HeaderService,
    private navMenuService: NavMenuService,
    private router: Router,
    private route: ActivatedRoute,
    private dataManagementService: DataManagementService
  ) {
    this.headerService.setDefaultHeader(true);
    this.navMenuService.setNavMenuVisibility(false);

    this.searchSubject.pipe(
      debounceTime(250)
    ).subscribe(searchTerm => {
      if (searchTerm.length > 0) {
        this.filteredExercises = this.availableExercises.filter(exercise => exercise.name.toLowerCase().includes(searchTerm.toLowerCase()));
      } else {
        this.filteredExercises = this.availableExercises;
      }
      console.log('Búsqueda:', searchTerm);
    });
  }

  ngOnInit() {
    this.isLoading = true;

    // Get the full list of exercises stored in the database
    this.dataManagementService.getExercises().pipe(
      switchMap((exercises) => {
        // Store the full list of exercises in the component
        this.availableExercises = exercises;
        this.filteredExercises = exercises;

        // Get the template ID from the route
        const templateId = this.route.snapshot.paramMap.get('id');
        // If the template ID is not null, the template is being edited
        if (templateId) {
          this.isEditMode = true;
          // Get the template from the database
          return this.dataManagementService.getTemplateById(templateId);
        } else {
          // If the template ID is null, the template is being created
          return of(null);
        }
      })
    ).subscribe({
      next: (template) => {
        // If the template is not null, the template is being edited
        if (template) {
          console.log('Plantilla cargada:', template);
          this.template = template;
          this.selectedExercises = this.template.exercises!;
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error durante la carga:', error);
        this.router.navigate(['/template-list']);
        this.isLoading = false;
      }
    });
  }

  onTitleBlur(event: Event) {
    const target = event.target as HTMLElement;
    console.log(target.textContent);
    if (!target.textContent?.trim()) {
      target.textContent = this.isEditMode ? 'Editar Plantilla' : 'Nueva Plantilla';
      this.template.name = '';
    } else {
      this.template.name = target.textContent;
    }
  }

  onPropertyChange(event: Event, property: 'sets' | 'reps' | 'time') {
    const target = event.target as HTMLElement;
    const value = parseInt(target.textContent?.trim() || '0');

    if (isNaN(value)) {
      target.textContent = this.template.defaultProperties[property].toString();
      return;
    }

    // Establecer valores mínimos para cada propiedad
    let finalValue = value;
    switch (property) {
      case 'sets':
        finalValue = Math.max(1, value);
        break;
      case 'reps':
        finalValue = Math.max(1, value);
        break;
      case 'time':
        finalValue = Math.max(1, value);
        break;
    }

    if (finalValue !== value) {
      target.textContent = finalValue.toString();
    }

    this.template.defaultProperties[property] = finalValue;
  }

  saveTemplate() {
    if (this.isEditMode) {
      this.dataManagementService.updateTemplate(this.template).subscribe({
        next: () => {
          this.router.navigate(['/template-list']);
        },
        error: (error) => {
          console.error('Error al actualizar la plantilla:', error);
        }
      });
    } else {
      this.dataManagementService.createTemplate(this.template).subscribe({
        next: () => {
          this.router.navigate(['/template-list']);
        },
        error: (error) => {
          console.error('Error al crear la plantilla:', error);
        }
      });
    }
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchSubject.next(input.value);
  }

  isExerciseSelected(exercise: DbExercise): boolean {
    return this.selectedExercises.some(e => e.id === exercise.id);
  }

  // When the user selects an exercise, it is stored in the selectedExercises array
  // This function is used to keep track of the "templateExercise" object that is stored in the selectedExercises array
  // And to update it when the user changes the "series", "reps", "weight" or "time" of the exercise
  getTemplateExercise(exercise: DbExercise): TemplateExercise {
    return this.selectedExercises.find(e => e.id === exercise.id) as TemplateExercise;
  }

  onSelectedChange(event: { exercise: DbExercise, selected: boolean }) {
    const { exercise, selected } = event;
    if (selected) {
      // If the exercise is selected, it is added to the selectedExercises array
      // And a new "templateExercise" object is created with the default properties
      const templateExercise: TemplateExercise = {
        ...exercise,
        sets: Array(this.template.defaultProperties.sets).fill(null).map(() => ({
          reps: this.template.defaultProperties.reps,
          weight: this.template.defaultProperties.weight,
          time: this.template.defaultProperties.time
        }))
      };
      this.selectedExercises.push(templateExercise);
    } else {
      // If the exercise is not selected, it is removed from the selectedExercises array
      this.selectedExercises.splice(this.selectedExercises.findIndex(e => e.id === exercise.id), 1);
    }
  } 
  
} 