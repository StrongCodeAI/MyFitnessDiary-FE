import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);

  getCurrentUser() {
    return this.currentUserSubject.asObservable();
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }
} 