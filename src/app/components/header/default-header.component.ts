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
  @Input() showLogoutButton: boolean = false;
  showLogoutModal = false;

  constructor(
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) {}

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