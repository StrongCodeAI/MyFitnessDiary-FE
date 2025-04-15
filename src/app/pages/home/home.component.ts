import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { NavMenuService } from '../../services/nav-menu.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private headerService: HeaderService, private navMenuService: NavMenuService) {
    this.headerService.setHomeHeader();
    this.navMenuService.setNavMenuVisibility(true);

  }
}
