import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavMenuService {
    private showNavMenuSubject = new BehaviorSubject<boolean>(false);
    showNavMenu$ = this.showNavMenuSubject.asObservable();

    setNavMenuVisibility(show: boolean) {
        this.showNavMenuSubject.next(show);
    }
} 