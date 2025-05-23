import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg class="check-icon" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.5"
        d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z"
        stroke="currentColor" stroke-width="1.5" />
      <path d="M5.3125 7.8125L6.5625 9.0625L9.6875 5.9375"
        stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,
  styles: [`
    .check-icon {
      width: 15px;
      height: 15px;
    }
  `]
})
export class CheckIconComponent {} 