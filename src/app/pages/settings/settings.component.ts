import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderService } from '../../services/header.service';

interface User {
  profilePicture: string;
  username: string;
  firstName: string;
  email: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user: User = {
    profilePicture: 'assets/images/profile-default.svg',
    username: 'Usuario',
    firstName: 'Nombre',
    email: 'email@ejemplo.com'
  };
  isEditing: boolean = true;
  showDeleteModal: boolean = false;
  showDeletionInfo: boolean = false;

  constructor(
    private headerService: HeaderService,
    private authService: AuthService,
    private router: Router
  ) {
    this.headerService.setDefaultHeader();
  }

  ngOnInit() {
    // Aquí se cargarían los datos reales del usuario
    this.loadUserData();
  }

  loadUserData() {
    // TODO: Implementar la carga de datos del usuario desde el backend
  }

  updateUser() {
    // TODO: Implementar la actualización de datos del usuario en el backend
    console.log('Actualizando usuario:', this.user);
  }

  openDeleteModal() {
    this.showDeleteModal = true;
    this.showDeletionInfo = false;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.showDeletionInfo = false;
  }

  confirmDeletion() {
    this.showDeletionInfo = true;
  }

  finalizeDeletion() {
    this.authService.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
