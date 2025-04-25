import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordService } from '../../../services/password.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnDestroy {
  password = '';
  confirmPassword = '';
  passwordErrors: string[] = [];
  showPasswordErrors = false;

  constructor(
    private router: Router,
    private passwordService: PasswordService,
    private authService: AuthService
  ) {
    this.authService.currentUserSubject.next(null);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const passwordInput = document.querySelector('.password-input-container input');
    const errorsContainer = document.querySelector('.password-errors');
    
    if (passwordInput && !passwordInput.contains(target) && 
        errorsContainer && !errorsContainer.contains(target)) {
      this.showPasswordErrors = false;
    }
  }

  onPasswordChange(password: string): void {
    this.password = password;
    this.passwordErrors = this.passwordService.validatePassword(password);
    this.showPasswordErrors = true;
  }

  onConfirmPasswordChange(confirmPassword: string): void {
    this.confirmPassword = confirmPassword;
    this.passwordErrors = this.passwordService.validatePasswordMatch(
      this.password,
      confirmPassword,
      this.passwordErrors
    );
  }

  onSave(): void {
    if (this.passwordErrors.length === 0 && this.password === this.confirmPassword) {
      // Aquí iría la lógica para guardar la nueva contraseña
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.onDocumentClick);
  }
} 