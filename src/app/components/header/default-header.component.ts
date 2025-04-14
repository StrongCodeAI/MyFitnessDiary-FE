import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-default-header',
  imports: [CommonModule],
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css']
})
export class DefaultHeaderComponent {
  @Input() showBackButton: boolean = true;
  isSettingsPage = false;
  showLogoutModal = false;

  constructor(
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) {
    this.isSettingsPage = this.router.url === '/settings';
  }

  goBack() {
    this.location.back();
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  openLogoutModal() {
    this.showLogoutModal = true;
  }

  closeLogoutModal() {
    this.showLogoutModal = false;
  }

  confirmLogout() {
    this.authService.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
} 