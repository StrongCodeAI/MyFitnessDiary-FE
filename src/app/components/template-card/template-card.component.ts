import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewIconComponent } from '../icons/view-icon.component';
import { EditIconComponent } from '../icons/edit-icon.component';
import { DeleteIconComponent } from '../icons/delete-icon.component';

interface Template {
  id: string;
  name: string;
  exerciseCount: number;
}

@Component({
  selector: 'app-template-card',
  standalone: true,
  imports: [CommonModule, ViewIconComponent, EditIconComponent, DeleteIconComponent],
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.css']
})
export class TemplateCardComponent {
  @Input() template!: Template;
  @Output() view = new EventEmitter<Template>();
  @Output() edit = new EventEmitter<Template>();
  @Output() delete = new EventEmitter<Template>();

  viewTemplate(template: Template) {
    this.view.emit(template);
  }

  editTemplate(template: Template) {
    this.edit.emit(template);
  }

  deleteTemplate(template: Template) {
    this.delete.emit(template);
  }
} 