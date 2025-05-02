import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { NavMenuService } from '../../services/nav-menu.service';
import { DataManagementService } from '../../services/data-management.service';
import { Workout } from '../../models/workout.interface';
import { WorkoutCardComponent } from "../../components/workout-card/workout-card.component";
@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule, RouterModule, WorkoutCardComponent],
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  workouts: Workout[] = [];

  constructor(
    private headerService: HeaderService, 
    private navMenuService: NavMenuService,
    private dataManagementService: DataManagementService
  ) {
    this.headerService.setDefaultHeader(false);
    this.navMenuService.setNavMenuVisibility(true);
  }

  ngOnInit() {
    this.dataManagementService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }
} 