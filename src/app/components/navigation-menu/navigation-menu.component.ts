import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeIconComponent } from '../icons/home-icon.component';
import { DiaryIconComponent } from '../icons/diary-icon.component';
import { TemplateIconComponent } from '../icons/template-icon.component';
import { TrainerIconComponent } from '../icons/trainer-icon.component';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [HomeIconComponent, DiaryIconComponent, TemplateIconComponent, TrainerIconComponent],
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
