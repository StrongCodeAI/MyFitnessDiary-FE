import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    this.headerService.setDefaultHeader();
  }

  ngOnInit() {
  }
} 