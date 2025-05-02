import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { NavMenuService } from '../../services/nav-menu.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DataManagementService } from '../../services/data-management.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FullCalendarModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    firstDay: 1,
    plugins: [dayGridPlugin, interactionPlugin],
    events: [], // Aquí irán los días marcados
    headerToolbar: {
      left: 'title',
      right: 'prev,next'
    },
    titleFormat: { year: 'numeric', month: 'long' },
    dayHeaderFormat: { weekday: 'short' },
    fixedWeekCount: false,
    showNonCurrentDates: false,
    height: 'auto',
    eventDisplay: 'background',
    eventColor: '#E4A853',
    eventBackgroundColor: '#E4A853',
    locale: 'es',
    dateClick: (info) => {
      this.handleDateClick(info);
    },
  };

  isLoading = true;

  constructor(
    private headerService: HeaderService,
    private navMenuService: NavMenuService,
    private dataManagerService: DataManagementService
  ) {
    this.headerService.setHomeHeader();
    this.navMenuService.setNavMenuVisibility(true);
  }

  ngOnInit() {
    // Al iniciar, pedimos los días marcados del mes actual
    const today = new Date();
    this.fetchMarkedDaysForMonth(today.getFullYear(), today.getMonth() + 1);
  }

  markDays(dates: string[]) {
    this.calendarOptions.events = dates.map(date => ({
      start: date,
      display: 'background'
    }));
  }

  handleDateClick(info: any) {
    console.log('Día clickeado:', info.dateStr);
  }

  fetchMarkedDaysForMonth(year: number, month: number) {
    this.isLoading = true;
    this.dataManagerService.getMarkedDaysForMonth(year, month).subscribe(dates => {
      this.markDays(dates);
      this.isLoading = false;
    });
  }
}
