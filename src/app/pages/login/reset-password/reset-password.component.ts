import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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

  validatePassword(password: string): void {
    this.passwordErrors = [];
    
    if (password.length < 8) {
      this.passwordErrors.push('La contraseña debe tener al menos 8 caracteres');
    }
    
    if (!/[A-Z]/.test(password)) {
      this.passwordErrors.push('La contraseña debe contener al menos una letra mayúscula');
    }
    
    if (!/[a-z]/.test(password)) {
      this.passwordErrors.push('La contraseña debe contener al menos una letra minúscula');
    }
    
    if (!/[0-9]/.test(password)) {
      this.passwordErrors.push('La contraseña debe contener al menos un número');
    }
    
    if (!/[!@#$%^&*]/.test(password)) {
      this.passwordErrors.push('La contraseña debe contener al menos un carácter especial (!@#$%^&*)');
    }
  }

  onPasswordChange(password: string): void {
    this.password = password;
    this.validatePassword(password);
    this.showPasswordErrors = true;
  }

  onConfirmPasswordChange(confirmPassword: string): void {
    this.confirmPassword = confirmPassword;
    if (this.password !== confirmPassword) {
      if(!this.passwordErrors.includes('Las contraseñas no coinciden')){
        this.passwordErrors.push('Las contraseñas no coinciden');
      }
    } else if (this.passwordErrors.includes('Las contraseñas no coinciden')) {
      this.passwordErrors = this.passwordErrors.filter(error => error !== 'Las contraseñas no coinciden');
    }
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