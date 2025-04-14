import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  validatePassword(password: string): string[] {
    const errors: string[] = [];
    
    if (password.length < 8) {
      errors.push('La contraseña debe tener al menos 8 caracteres');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('La contraseña debe contener al menos una letra mayúscula');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('La contraseña debe contener al menos una letra minúscula');
    }
    
    if (!/[0-9]/.test(password)) {
      errors.push('La contraseña debe contener al menos un número');
    }
    
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push('La contraseña debe contener al menos un carácter especial (!@#$%^&*)');
    }

    return errors;
  }

  validatePasswordMatch(password: string, confirmPassword: string, currentErrors: string[]): string[] {
    const errors = [...currentErrors];
    
    if (password !== confirmPassword) {
      if (!errors.includes('Las contraseñas no coinciden')) {
        errors.push('Las contraseñas no coinciden');
      }
    } else if (errors.includes('Las contraseñas no coinciden')) {
      return errors.filter(error => error !== 'Las contraseñas no coinciden');
    }

    return errors;
  }
} 