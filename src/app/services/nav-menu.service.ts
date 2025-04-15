import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavMenuService {
    private showNavMenuSubject = new BehaviorSubject<boolean>(false);
    showNavMenu$ = this.showNavMenuSubject.asObservable();

    constructor(private router: Router) {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    const showMenu = ['/home', '/diary', '/trainer', '/template'].includes(event.url);
                    this.setNavMenuVisibility(showMenu);
                }
            });
    }

    setNavMenuVisibility(show: boolean) {
        this.showNavMenuSubject.next(show);
    }

    showNavMenu() {
        this.setNavMenuVisibility(true);
    }

    hideNavMenu() {
        this.setNavMenuVisibility(false);
    }
} 