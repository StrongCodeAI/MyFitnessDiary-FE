import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import User from '../../models/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isHomePage: boolean = false;
  currentRoute: string = '';
  
  user: User = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    profilePicture: 'assets/images/profile-default.svg'
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Suscribirse a los cambios de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.url;
      this.isHomePage = this.currentRoute === '/' || this.currentRoute === '/home';
    });
  }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

  navigateToHome() {
    // Solo navegar si no estamos ya en home
    if (!this.isHomePage) {
      this.router.navigate(['/']);
    }
  }

  get isLogoClickable(): boolean {
    return !this.isHomePage;
  }
}
