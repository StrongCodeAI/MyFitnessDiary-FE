import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    this.headerService.setDefaultHeader();
  }

  ngOnInit() {
  }
} 