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

@Component({
  selector: 'app-template-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingSpinnerComponent],
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.css']
})
export class TemplateEditComponent implements OnInit {
  template: Template = {
    id: uuidv4(),
    name: 'Nueva Plantilla',
    exerciseCount: 0
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

  onTitleChange(event: Event) {
    const target = event.target as HTMLElement;
    this.template.name = target.textContent || '';
  }

  onTitleBlur(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.textContent?.trim()) {
      target.textContent = this.isEditMode ? 'Editar Plantilla' : 'Nueva Plantilla';
      this.template.name = '';
    }
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
} 