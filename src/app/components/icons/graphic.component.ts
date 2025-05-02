import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graphic-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H21" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 9.5L9.2929 8.20711C9.6262 7.87377 9.7929 7.70711 10 7.70711C10.2071 7.70711 10.3738 7.87377 10.7071 8.20711L11.2929 8.79289C11.6262 9.1262 11.7929 9.2929 12 9.2929C12.2071 9.2929 12.3738 9.1262 12.7071 8.79289L14 7.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path opacity="0.5" d="M11 20V16M11 20L9 21M11 20L13 21" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M19 1V9.5C19 12.5641 19 14.0962 17.9958 15.0481C16.9916 16 15.3753 16 12.1429 16H9.8571C6.62465 16 5.00841 16 4.00421 15.0481C3 14.0962 3 12.5641 3 9.5V1" stroke="#1C274C" stroke-width="1.5"/>
</svg>

  `,
  styles: [`
    .view-icon {
      width: 24px;
      height: 24px;
    }
  `]
})
export class GraphicIconComponent { } 