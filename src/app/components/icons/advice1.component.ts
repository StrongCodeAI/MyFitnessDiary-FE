import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advice1-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
      <path d="M21.9348 15.6583L18.6383 3.37924C18.2799 2.0442 16.6391 1.55235 15.603 2.46935L13.5253 4.30818C11.2132 6.35446 8.45556 7.83537 5.47068 8.63362C2.97216 9.30181 1.49142 11.8725 2.16089 14.3662C2.83037 16.8599 5.40053 18.3472 7.89906 17.679C10.8839 16.8807 14.014 16.787 17.0415 17.4054L19.762 17.961C21.1187 18.2381 22.2932 16.9933 21.9348 15.6583Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
      <path d="M7.71747 8L11.5 22" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
    </svg>
  `,
  styles: [`
    .view-icon {
      width: 24px;
      height: 24px;
    }
  `]
})
export class Advice1IconComponent { } 