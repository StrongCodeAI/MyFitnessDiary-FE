import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { NavMenuService } from '../../../services/nav-menu.service';
import { Template, TemplateExercise } from '../../../models/template.interface';
import { DbExercise } from '../../../models/dbExercise.interface';
import { DataManagementService } from '../../../services/data-management.service';
import { LoadingSpinnerComponent } from '../../../components/loading-spinner/loading-spinner.component';
import { ExerciseCardComponent } from '../../../components/exercise-card/exercise-card.component';
import { SaveIconComponent } from '../../../components/icons/save-icon.component';

@Component({
  selector: 'app-template-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingSpinnerComponent,
    ExerciseCardComponent,
    SaveIconComponent
  ],
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.css']
})
export class TemplateViewComponent implements OnInit {
  // List of exercises in the template
  selectedExercises: TemplateExercise[] = [];
  // We'll display exactly those exercises
  filteredExercises: TemplateExercise[] = [];

  template: Template = {
    id: '',
    name: '',
    defaultProperties: { sets: 0, reps: 0, weight: 0, time: 0 },
    exercises: []
  };

  isEditMode = false;   // always false in view mode
  isLoading = true;

  isViewMode = true;

  constructor(
    private headerService: HeaderService,
    private navMenuService: NavMenuService,
    private router: Router,
    private route: ActivatedRoute,
    private dataManagementService: DataManagementService
  ) {
    // Show header and nav when viewing
    this.headerService.setDefaultHeader(true);
    this.navMenuService.setNavMenuVisibility(true);
  }

  ngOnInit() {
    this.isLoading = true;

    const templateId = this.route.snapshot.paramMap.get('id');
    if (!templateId) {
      // No ID → go back
      this.router.navigate(['/template-list']);
      return;
    }

    this.dataManagementService.getTemplateById(templateId).subscribe({
      next: (tpl) => {
        if (!tpl) {
          this.router.navigate(['/template-list']);
          return;
        }
        // Load the template
        this.template = tpl;
        // Exercises to display
        this.selectedExercises = tpl.exercises!;
        this.filteredExercises = this.selectedExercises.sort((a, b) => a.name.localeCompare(b.name));
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error cargando la plantilla:', err);
        this.router.navigate(['/template-list']);
        this.isLoading = false;
      }
    });
  }

  // No-op stubs for bindings in the template
  onTitleBlur(_: Event) { /* lectura sólo */ }
  onPropertyChange(_: Event, __: 'sets' | 'reps' | 'time') { /* lectura sólo */ }
  onSearch(_: Event) { /* no hay búsqueda en vista */ }
  saveTemplate() { /* no hay guardar en vista */ }
  onSelectedChange(_: { exercise: DbExercise; selected: boolean }) { /* no editable */ }

  isExerciseSelected(_: DbExercise): boolean {
    // All listed exercises are “selected”
    return true;
  }

  getTemplateExercise(ex: DbExercise): TemplateExercise {
    return this.selectedExercises.find(e => e.id === ex.id)!;
  }
}
