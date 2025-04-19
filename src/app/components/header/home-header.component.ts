import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User from '../../models/user.interface';
import { SettingsIconComponent } from '../icons/settings-icon.component';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css'],
  imports: [SettingsIconComponent]
})
export class HomeHeaderComponent {
  isHomePage: boolean = false;
  currentRoute: string = '';
  
  user: User = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    profilePicture: 'assets/images/profile-default.svg'
  };

  constructor(
    private router: Router
  ) {}

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

  navigateToHome() {
    // Solo navegar si no estamos ya en home
    this.router.navigate(['/']);
  }
}
