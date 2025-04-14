import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordService } from '../../../services/password.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnDestroy {
  password = '';
  confirmPassword = '';
  passwordErrors: string[] = [];
  showPasswordErrors = false;

  constructor(private passwordService: PasswordService) {}

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

  ngOnDestroy(): void {
    // Limpiar el listener cuando el componente se destruye
    document.removeEventListener('click', this.onDocumentClick);
  }
} 