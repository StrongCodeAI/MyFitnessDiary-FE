import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { NavMenuService } from '../../services/nav-menu.service';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  constructor(private headerService: HeaderService, private navMenuService: NavMenuService) {
    this.headerService.setDefaultHeader();
    this.navMenuService.setNavMenuVisibility(true);
  }

  ngOnInit() {
  }
} 