import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface HeaderState {
  type: 'home' | 'default';
  showBackButton: boolean;
  showLogoutButton: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerState = new BehaviorSubject<HeaderState>({
    type: 'home',
    showBackButton: false,
    showLogoutButton: false
  });

  headerState$ = this.headerState.asObservable();

  setHomeHeader() {
    this.headerState.next({
      type: 'home',
      showBackButton: false,
      showLogoutButton: false
    });
  }

  setDefaultHeader(showBackButton: boolean = true, showLogoutButton: boolean = false) {
    this.headerState.next({
      type: 'default',
      showBackButton,
      showLogoutButton
    });
  }
} 