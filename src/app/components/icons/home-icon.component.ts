import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg class="nav-icon" viewBox="0 0 22 17">
      <path d="M0 17V0H9L9.4 2H15V12H8L7.6 10H2V17H0ZM9.65 10H13V4H7.75L7.35 2H2V8H9.25L9.65 10Z" />
    </svg>
  `,
  styles: [`
    .nav-icon {
      width: 22px;
      height: 17px;
    }
  `]
})
export class HomeIconComponent {} 