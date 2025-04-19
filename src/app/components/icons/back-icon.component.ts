import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg class="back-icon" viewBox="0 0 24 24">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  `,
  styles: []
})
export class BackIconComponent {} 