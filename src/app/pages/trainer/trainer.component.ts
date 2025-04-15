import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { DataManagementService } from '../../services/data-management.service';
import { Trainer } from '../../models/trainer.interface';
import { TrainerCardComponent } from '../../components/trainer-card/trainer-card.component';
import { NavMenuService } from '../../services/nav-menu.service';
@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [CommonModule, RouterModule, TrainerCardComponent],
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  trainers: Trainer[] = [];

  constructor(
    private headerService: HeaderService,
    private dataManagementService: DataManagementService,
    private navMenuService: NavMenuService
  ) {
    this.headerService.setDefaultHeader(false);
    this.navMenuService.setNavMenuVisibility(true);
  }

  ngOnInit(): void {
    this.loadTrainers();
  }

  private loadTrainers(): void {
    this.dataManagementService.getTrainers().subscribe({
      next: (trainers) => {
        this.trainers = trainers;
      },
      error: (error) => {
        console.error('Error al cargar los entrenadores:', error);
        // Aquí podrías agregar un manejo de errores más específico
      }
    });
  }
} 