import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../../services/header.service';
import { NavMenuService } from '../../../services/nav-menu.service';
import { Template } from '../../../models/template.interface';
import { TemplateCardComponent } from '../../../components/template-card/template-card.component';
import { DataManagementService } from '../../../services/data-management.service';
@Component({
  selector: 'app-template-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TemplateCardComponent],
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {
  templates: Template[] = [];
  showDeleteModal = false;
  templateToDelete: Template | null = null;

  constructor(
    private headerService: HeaderService, 
    private navMenuService: NavMenuService,
    private dataManagementService: DataManagementService
  ) {
    this.headerService.setDefaultHeader(false);
    this.navMenuService.setNavMenuVisibility(true);
  }

  ngOnInit() {
    this.loadTemplates();
  }

  private loadTemplates(): void {
    this.dataManagementService.getTemplates().subscribe({
      next: (templates) => {
        this.templates = templates;
      }
    });
  }

  viewTemplate(template: Template) {
    // TODO: Implementar la visualización de la plantilla
    console.log('Ver plantilla:', template);
  }

  editTemplate(template: Template) {
    // TODO: Implementar la edición de la plantilla
    console.log('Editar plantilla:', template);
  }

  deleteTemplate(template: Template) {
    this.templateToDelete = template;
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.templateToDelete = null;
  }

  confirmDelete() {
    if (this.templateToDelete) {
      console.log('Eliminando plantilla:', this.templateToDelete);
      // TODO: Implementar la eliminación real de la plantilla
      this.closeDeleteModal();
    }
  }

  createTemplate() {
    // TODO: Implementar la creación de una nueva plantilla
    console.log('Crear nueva plantilla');
  }
} 