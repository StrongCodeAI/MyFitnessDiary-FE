import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plus-circle-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg class="plus-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.375 7.5H7.5M7.5 7.5H5.625M7.5 7.5V5.625M7.5 7.5V9.375" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M13.75 7.5C13.75 10.4463 13.75 11.9194 12.8347 12.8347C11.9194 13.75 10.4463 13.75 7.5 13.75C4.55372 13.75 3.08058 13.75 2.16529 12.8347C1.25 11.9194 1.25 10.4463 1.25 7.5C1.25 4.55372 1.25 3.08058 2.16529 2.16529C3.08058 1.25 4.55372 1.25 7.5 1.25C10.4463 1.25 11.9194 1.25 12.8347 2.16529C13.4433 2.77388 13.6473 3.62909 13.7156 5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `,
  styles: [`
    .plus-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  `]
})
export class PlusCircleIconComponent {} 