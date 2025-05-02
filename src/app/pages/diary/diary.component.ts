import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { NavMenuService } from '../../services/nav-menu.service';
import { DataManagementService } from '../../services/data-management.service';
import { Workout } from '../../models/workout.interface';
import { WorkoutCardComponent } from "../../components/workout-card/workout-card.component";
import { GraphicIconComponent } from '../../components/icons/graphic.component';
@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule, RouterModule, WorkoutCardComponent, GraphicIconComponent],
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  workouts: Workout[] = [];
  filteredWorkouts: Workout[] = [];
  fromDate: string = '2024-01-01';
  toDate: string = new Date().toISOString().slice(0, 10); // hoy por defecto
  today: string = new Date().toISOString().slice(0, 10);

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
      this.filterWorkouts();
    });
  }

  onFromDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.fromDate = input.value;
    this.filterWorkouts();
  }

  onToDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.toDate = input.value;
    this.filterWorkouts();
  }

  filterWorkouts() {
    const from = new Date(this.fromDate);
    const to = new Date(this.toDate);
    to.setHours(23, 59, 59, 999); // incluir todo el día hasta la noche
    this.filteredWorkouts = this.workouts.filter(w => {
      const workoutDate = new Date(w.date);
      return workoutDate >= from && workoutDate <= to;
    });
  }
} 