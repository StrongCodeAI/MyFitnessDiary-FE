import { Component } from '@angular/core';

@Component({
  selector: 'app-trashcan-icon',
  template: `
    <svg class="trashcan-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5001 4H1.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M4.5 4C4.55588 4 4.58382 4 4.60915 3.99936C5.43259 3.97849 6.15902 3.45491 6.43922 2.68032C6.44784 2.65649 6.45667 2.62999 6.47434 2.57697L6.57143 2.28571C6.65431 2.03708 6.69575 1.91276 6.75071 1.8072C6.97001 1.38607 7.37574 1.09364 7.84461 1.01877C7.96213 1 8.0932 1 8.3553 1H11.6447C11.9068 1 12.0379 1 12.1554 1.01877C12.6243 1.09364 13.03 1.38607 13.2493 1.8072C13.3043 1.91276 13.3457 2.03708 13.4286 2.28571L13.5257 2.57697C13.5433 2.62992 13.5522 2.65651 13.5608 2.68032C13.841 3.45491 14.5674 3.97849 15.3909 3.99936C15.4162 4 15.4441 4 15.5 4" stroke="#1C274C" stroke-width="1.5"/>
      <path d="M16.3735 13.3991C16.1965 16.054 16.108 17.3815 15.243 18.1907C14.378 19 13.0476 19 10.3868 19H9.6134C6.9526 19 5.6222 19 4.75719 18.1907C3.89218 17.3815 3.80368 16.054 3.62669 13.3991L3.16675 6.5M16.8334 6.5L16.6334 9.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `,
  standalone: true,
  styles: [`
    .trashcan-icon {
      width: 24px;
      height: 24px;
    }
  `]
})
export class TrashcanIconComponent {} 