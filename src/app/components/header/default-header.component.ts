import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-header',
  imports: [CommonModule],
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css']
})
export class DefaultHeaderComponent {
  @Input() showBackButton: boolean = true;

  constructor(
    private location: Location,
    private router: Router
  ) {}

  goBack() {
    this.location.back();
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
} 