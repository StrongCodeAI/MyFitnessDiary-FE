import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DefaultHeaderComponent } from './components/header/default-header.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { HeaderService } from './services/header.service';
import { CommonModule } from '@angular/common';

/**
 * AppComponent - Componente raíz de la aplicación
 * 
 * Este componente actúa como el contenedor principal de la aplicación y tiene las siguientes responsabilidades:
 * 
 * 1. Estructura Principal:
 *    - Define la estructura básica de la aplicación
 *    - Contiene elementos presentes en todas las páginas (header, footer, sidebar, etc.)
 * 
 * 2. Router Outlet:
 *    - Renderiza los componentes hijos a través del sistema de rutas
 *    - Se implementa usando <router-outlet></router-outlet>
 * 
 * 3. Estado Global:
 *    - Maneja el estado global de la aplicación
 *    - Gestiona temas (claro/oscuro)
 *    - Maneja el idioma de la aplicación
 *    - Gestiona el estado de autenticación
 * 
 * 4. Servicios Globales:
 *    - Inicializa servicios disponibles en toda la aplicación
 *    - Maneja la comunicación con el backend
 *    - Gestiona el almacenamiento local
 * 
 * 5. Gestión de Layout:
 *    - Maneja diferentes layouts según la ruta
 *    - Controla la visibilidad de elementos según autenticación
 *    - Gestiona la responsividad
 * 
 * 6. Interceptores y Guards:
 *    - Configura interceptores HTTP
 *    - Implementa guards de rutas
 *    - Maneja errores globales
 * 
 * 7. Configuración de Estilos:
 *    - Define variables CSS globales
 *    - Configura temas
 *    - Establece estilos base
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DefaultHeaderComponent, NavigationMenuComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isHomePage: boolean = true;
  isHomeHeader = true;

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.headerState$.subscribe(state => {
      this.isHomeHeader = state.type === 'home';
    });
  }
}
