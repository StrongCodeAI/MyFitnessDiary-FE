import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    // Simulamos un usuario autenticado
    const mockUser = {
      firstName: 'Test',
      lastName: 'User',
      username: 'testuser',
      email: 'test@example.com',
      profilePicture: 'assets/images/profile-default.svg'
    };
    
    // Actualizamos el estado de autenticación
    this.authService.currentUserSubject.next(mockUser);
    
    // Redirigimos al home
    this.router.navigate(['/home']);
  }
} 