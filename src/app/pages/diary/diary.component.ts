import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    this.headerService.setDefaultHeader();
  }

  ngOnInit() {
  }
} 