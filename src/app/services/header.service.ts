import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface HeaderState {
  type: 'home' | 'default';
  showBackButton: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerState = new BehaviorSubject<HeaderState>({
    type: 'home',
    showBackButton: false
  });

  headerState$ = this.headerState.asObservable();

  setHomeHeader() {
    this.headerState.next({
      type: 'home',
      showBackButton: false
    });
  }

  setDefaultHeader(showBackButton: boolean = true) {
    this.headerState.next({
      type: 'default',
      showBackButton
    });
  }
} 