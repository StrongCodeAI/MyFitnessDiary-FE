import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css'
})
export class NavigationMenuComponent {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
