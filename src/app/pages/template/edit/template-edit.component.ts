import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { NavMenuService } from '../../../services/nav-menu.service';
import { Template } from '../../../models/template.interface';
import { v4 as uuidv4 } from 'uuid';
import { DataManagementService } from '../../../services/data-management.service';
import { LoadingSpinnerComponent } from '../../../components/loading-spinner/loading-spinner.component';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-template-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingSpinnerComponent],
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.css']
})
export class TemplateEditComponent implements OnInit {
  private searchSubject = new Subject<string>();
  
  template: Template = {
    id: uuidv4(),
    name: 'Nueva Plantilla',
    exerciseCount: 0,
    defaultProperties: {
      'sets': 1,
      'reps': 10,
      'time': 5
    }
  };
  isEditMode: boolean = false;
  isLoading: boolean = true;
  selectedExercises: string[] = [];

  constructor(
    private headerService: HeaderService,
    private navMenuService: NavMenuService,
    private router: Router,
    private route: ActivatedRoute,
    private dataManagementService: DataManagementService
  ) {
    this.headerService.setDefaultHeader(true);
    this.navMenuService.setNavMenuVisibility(false);

    // Configurar el debounce para la búsqueda
    this.searchSubject.pipe(
      debounceTime(300) // Espera 300ms después de la última pulsación
    ).subscribe(searchTerm => {
      console.log('Búsqueda:', searchTerm);
    });
  }

  ngOnInit() {
    const templateId = this.route.snapshot.paramMap.get('id');
    if (templateId) {
      this.isEditMode = true;
      this.dataManagementService.getTemplateById(templateId).subscribe({
        next: (template) => {
          console.log('Plantilla cargada:', template);
          this.template = template;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error al cargar la plantilla:', error);
          this.router.navigate(['/template-list']);
          this.isLoading = false;
        }
      });
    } else {
      this.isLoading = false;
    }
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
      // TODO: Implementar la actualización de la plantilla
      console.log('Actualizando plantilla:', this.template);
    } else {
      // TODO: Implementar la creación de la plantilla
      console.log('Creando nueva plantilla:', this.template);
    }
    this.router.navigate(['/template-list']);
  }

  cancel() {
    this.router.navigate(['/template-list']);
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchSubject.next(input.value);
  }
} 